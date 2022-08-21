import createDataContext from "./createDataContext";
import {
    mainAxios,
    uploadAxios
} from "../api/tracker";
import { showMessage, hideMessage } from "react-native-flash-message";


import { navigate } from "../navigationRef";

const postReducer = (state, action) => {
    switch (action.type) {

        case "add_posts":

            return { ...state, posts: action.payload, allPostFetched: true };

        case "add_more_posts":
            return { ...state, posts: [...state.posts, ...action.payload] };

        case "delete_post":


            const newPosts = state.posts.filter((item) => item._id !== action.payload);
            const myNewPOSTS = state.myposts.filter((item) => item._id !== action.payload);

            return { ...state, posts: newPosts, myposts: myNewPOSTS };


        case "add_more_myposts":
            return { ...state, myposts: [...state.myposts, ...action.payload] };
        case "add_myposts":

            return { ...state, myposts: action.payload, myPostFetched: true };

        //

        case "add_error":
            console.log("errorMessage " + action.payload)
            return { ...state, errorMessage: action.payload };

        case "clear_error_message":
            return { ...state, isValidUser: true, errorMessage: "" };

        default:
            return state;
    }
};



const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
};

const addPosts = (dispatch) => (posts) => {
    console.log("add_posts " + posts)
    dispatch({ type: "add_posts", payload: posts });
}



const uploadFile = (dispatch) => async ({ content, task_id, file }) => {

    console.log("form data" + content + "  file" + file + "  " + task_id);

    let result;

    try {
        const data = new FormData();
        data.append('content', content);
        data.append('task_id', task_id);

        let localUri = file.uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = file.type === 'image' ? `image/${match[1]}` : `video/${match[1]}`;

        data.append('file', {
            uri: localUri,

            type: type,
            name: filename,

        });
        
        const resultRe = await uploadAxios.post('/posts/', data).then(async (response) => {
            await response;
            
            result = true;


        }).catch(error => {
            console.log("error nn",error);

            result = false;
        });
        console.log(uploadAxios.header);
    } catch (err) {
        console.log(err);
        console.log("response 19 ", response);
        return true;
        result = false;

    }
    return result;

}


const createPost = (dispatch) => async ({ content, task_id }) => {


    let result;

    try {
        const response = await mainAxios.post("/posts/create", { content, task_id }, {

        })
            .then(async (response) => {
                await response;



                result = true;

            })
            .catch(error => {
                console.log(error);

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong in posting") : "Something went wrong in posting"
                dispatch({
                    type: "add_error",
                    payload: message,
                });

                console.log(message);
                result = false;
            });


    } catch (err) {
        console.log(response);

        dispatch({
            type: "add_error",
            payload: error.response.data.message,
        });
        result = false;
    }
    return result;
};


//


const postReview = (dispatch) => async ({ taskId, paragraph, rating, happy, more }) => {

    let data;
    try {
        const response = await mainAxios.post(`/tasks/review/${taskId}`, { content: paragraph, rating, happy, more })
            .then(async (response) => {
                await response;
                //  console.log(response.data);
                data = response.data;


                showMessage({
                    message: "Review added successfully",
                    type: "info",
                    backgroundColor: "green",
                });
                return data;

            })
            .catch(error => {




                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong ") : "Something went wrong"



                showMessage({
                    message: message,
                    type: "info",
                    backgroundColor: "#EF4430",
                });
                return null;

            });

    } catch (err) {
        showMessage({
            message: "Failed to add review",
            type: "info",
            backgroundColor: "#EF4430",
        });
        return null;

    }
    return data;
};



const reportPost = (dispatch) => async ({ postId, reportId }) => {

    let data;
    try {
        const response = await mainAxios.post(`/report/report/${postId}`, { reportId: reportId })
            .then(async (response) => {
                await response;
                //  console.log(response.data);
                data = response.data;


                showMessage({
                    message: "Post reported successfully",
                    type: "info",
                    backgroundColor: "green",
                });
                return data;

            })
            .catch(error => {




                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong ") : "Something went wrong"



                showMessage({
                    message: message,
                    type: "info",
                    backgroundColor: "#EF4430",
                });
                return null;

            });

    } catch (err) {
        showMessage({
            message: "Failed to report post",
            type: "info",
            backgroundColor: "#EF4430",
        });
        return null;

    }
    return data;
};


const deletePost = (dispatch) => async ({ postId }) => {

    let data;
    try {
        const response = await mainAxios.delete(`/posts/${postId}`)
            .then(async (response) => {
                await response;

                data = response.data;

                dispatch({ type: "delete_post", payload: postId });

                showMessage({
                    message: "Post deleted successfully",
                    type: "info",
                    backgroundColor: "green",
                });
                return data;

            })
            .catch(error => {
                console.log(error);
                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong in deleting post") : "Something went wrong in deleting post"

                showMessage({
                    message: message,
                    type: "info",
                    backgroundColor: "#EF4430",
                });
                return null;

            });

    } catch (err) {


        showMessage({
            message: "Failed to delete post,try again later",
            type: "info",
            backgroundColor: "#EF4430",
        });
        return null;

    }
    return data;
};


const fetchLikes = (dispatch) => async ({ postId }) => {

    let data;
    try {
        const response = await mainAxios.get(`/like/${postId}`)
            .then(async (response) => {
                await response;
                //  console.log(response.data);
                data = response.data;
                return data;

            })
            .catch(error => {

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong ") : "Something went wrong "

                return null;

            });

    } catch (err) {
        return null;

    }
    return data;
};

const likePost = (dispatch) => async ({ postId }) => {

    let data;
    try {
        const response = await mainAxios.post(`/like/${postId}`)
            .then(async (response) => {
                await response;
                //  console.log(response.data);
                data = response.data;
                return data;

            })
            .catch(error => {
                console.log(error.response);

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong ") : "Something went wrong "

                return null;

            });

    } catch (err) {
        return null;

    }

    return data;
};




const fetchMyPosts = (dispatch) => async (page) => {
    let nextPage = 1;
    let list_count = 0;

    try {
        const response = await mainAxios.get(`/posts/my?since=${page}`)
            .then(async (response) => {
                await response;
                //  console.log(response.data);

                nextPage = response.data.page;
                list_count = response.data.list.length;


                if (page > 1) {
                    dispatch({ type: "add_more_myposts", payload: response.data.list });

                    return;
                }
                dispatch({ type: "add_myposts", payload: response.data.list });






            })
            .catch(error => {
                console.log(error);

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong") : "Something went wrong "

                    ;
                dispatch({
                    type: "add_error",
                    payload: message,
                });
            });



    } catch (err) {

        console.log("err: " + err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong ",
        });
    }

    return { nextPage, list_count };
};

const fetchPost = (dispatch) => async (page) => {

    let nextPage = 1;
    let list_count = 0;
    try {
        const response = await mainAxios.get(`/posts?since=${page}`)
            .then(async (response) => {
                console.log(response.data.page);
                await response;
                nextPage = response.data.page;
                list_count = response.data.list.length;
                if (page > 1) {
                    dispatch({ type: "add_more_posts", payload: response.data.list });

                    return;
                }
                dispatch({ type: "add_posts", payload: response.data.list });



            })
            .catch(error => {
                console.log(error);

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"

                    ;
                dispatch({
                    type: "add_error",
                    payload: message,
                });
            });



    } catch (err) {

        console.log("err: " + err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in",
        });
    }

    return { nextPage, list_count };
};





export const { Provider, Context } = createDataContext(
    postReducer,
    {
        clearErrorMessage,
        fetchPost,
        createPost,
        likePost,
        fetchLikes,
        uploadFile,
        fetchMyPosts,
        deletePost,
        reportPost,
        postReview
    },
    {

        errorMessage: "",
        isValidForm: false,
        posts: [],
        myposts: [],
        myPostFetched: false,
        allPostsFetched: false
    }

);
// setNumber, VerifyNumber, isNumberValid, number