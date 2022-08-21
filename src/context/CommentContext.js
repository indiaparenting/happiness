
import createDataContext from "./createDataContext";
import { mainAxios,} from "../api/tracker";
import { navigate } from "../navigationRef";
const taskReducer = (state, action) => {
    switch (action.type) {

        case "add":

            return { ...state, tasks: action.payload };

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
const addTask = (dispatch) => (posts) => {
    console.log("add " + posts)
    dispatch({ type: "add", payload: posts });
}
const createComment = (dispatch) => async ({ postId, content, parentComment }) => {

    let data;
    try {

        const response = await mainAxios.post(`/posts/${postId}/comments/`, { content, comment: parentComment })
            .then(async (response) => {
                await response;
                console.log("get comments: " + response.data);
                data = response.data
                return data;

            })
            .catch(error => {

                console.log("get comments: " + error);
                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"


                return null;
            });



    } catch (err) {
        return null;
        console.log("err: " + err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in",
        });
    }

    return data;
};
const fetchComments = (dispatch) => async ({ postId }) => {

    let data;
    try {
        const response = await mainAxios.get(`/posts/${postId}/comments/`)
            .then(async (response) => {
                await response;
                console.log(response.data);
                data = response.data
                return data;

            })
            .catch(error => {

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"


                return [];
            });



    } catch (err) {
        return [];
        console.log("err: " + err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in",
        });
    }

    return data;
};
export const { Provider, Context } = createDataContext(
    taskReducer,
    {
        clearErrorMessage,
        fetchComments,
        createComment
    },{
        errorMessage: "",
        isValidForm: false,

    }

);
// setNumber, VerifyNumber, isNumberValid, number