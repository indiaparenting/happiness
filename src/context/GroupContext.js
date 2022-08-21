
import createDataContext from "./createDataContext";
import {
    mainAxios,
    uploadAxios
} from "../api/tracker";


import { showMessage, hideMessage } from "react-native-flash-message";

import { navigate } from "../navigationRef";

const groupReducer = (state, action) => {
    switch (action.type) {
        case "current_group":
            return { ...state, groupData: action.payload };
        case "invites":
            return { ...state, inviteData: action.payload }
        case "Requests":
            return { ...state, Requests: action.payload };
        case "myGroups":
            return { ...state, myGroups: action.payload };
        case "add_more_myGroups":
            return { ...state, myGroups: [...state.myGroups, ...action.payload] };
        case "AllGroups":
            return { ...state, AllGroups: action.payload };
        case "add_more_AllGroups":
            return { ...state, AllGroups: [...state.AllGroups, ...action.payload] };
        case "add_more_posts":
            return { ...state, posts: [...state.posts, ...action.payload] };
        case "add_posts":
            return { ...state, posts: action.payload };
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
const fetchAllGroups = (dispatch) => async (page) => {
    let nextPage = 1;
    let list_count = 0;
    try {
        const response = await mainAxios.get(`/group/getAllGroups?since=${page}`)
            .then(async (response) => {
                await response;
                nextPage = response.data.page;
                list_count = response.data.list.length;
                if (page > 1) {
                    dispatch({ type: "add_more_AllGroups", payload: response.data.list });
                } else {
                    dispatch({ type: "AllGroups", payload: response.data.list });
                }
                //    console.log(data)
            })
            .catch(error => {
                console.log(error);
                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong ") : "Something went wrong";
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
const fetchMyGroups = (dispatch) => async (page) => {
    let nextPage = 1;
    let list_count = 0;
    //  console.log("getMyGroups called")
    try {
        const response = await mainAxios.get(`/group/getMyGroups?since=${page}`)
            .then(async (response) => {
                await response;
                //    console.log(response.data);
                nextPage = response.data.page;
                list_count = response.data.list.length;
                if (page > 1) {
                    dispatch({ type: "add_more_myGroups", payload: response.data.list });
                } else {
                    dispatch({ type: "myGroups", payload: response.data.list });
                }
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
const fetchGroup = (dispatch) => async ({ taskId }) => {
    let data;
    console.log("fetchTaskStatus called")
    try {
        const response = await mainAxios.post("/taskStatus", { taskId })
            .then(async (response) => {
                await response;

                data = response.data
                return data;

            })
            .catch(error => {
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
const fetchPost = (dispatch) => async (page, _id) => {
    let nextPage = 1;
    let list_count = 0;
    try {
        const response = await mainAxios.get(`/group/getFeed/${_id}?since=${page}`)
            .then(async (response) => {
                await response;
                nextPage = response.data.page;
                list_count = response.data.list.length;
                if (page > 1) {
                    dispatch({ type: "add_more_posts", payload: response.data.list });
                } else {
                    dispatch({ type: "add_posts", payload: response.data.list });
                }
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
const joinGroup = (dispatch) => async (code) => {
    let data;
    try {
        const response = await mainAxios.post("/group/addRequest", { code: code })
            .then(async (response) => {
                await response;
                data = response.data;
                console.log(data);
                showMessage({
                    message: "Group join request sent successfully",
                    type: "info",
                    backgroundColor: "green",
                });
                return data;
            })
            .catch(error => {
                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong group creation") : "Something went wrong group creation"

                showMessage({
                    message: message,
                    type: "info",
                    backgroundColor: "#EF4430",
                });
                return null;
            });
    } catch (err) {
        showMessage({
            message: " unexpected error in joining group, please try again",
            type: "info",
            backgroundColor: "#EF4430",
        });
        return null;
        console.log("err: " + err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in",
        });
    }
    return data;
};
const createGroup = (dispatch) => async (name) => {
    let data;
    try {
        const response = await mainAxios.post("/group/create", { name: name })
            .then(async (response) => {
                await response;
                showMessage({
                    message: "Group created successfully",
                    type: "info",
                    backgroundColor: "green",
                });
                data = response.data
                return data;
            })
            .catch(error => {
                console.log(error.response.data);
                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Invalid group name") : "Invalid group name"

                dispatch({
                    type: "add_error",
                    payload: message,
                });
                showMessage({
                    message: message,
                    type: "info",
                    backgroundColor: "#EF4430",
                });
                return null;
            });
    } catch (err) {
        console.log("err: " + err);
        showMessage({
            message: "Goup creation failed, try again later",
            type: "info",
            backgroundColor: "#EF4430",
        });
        dispatch({
            type: "add_error",
            payload: "Something went wrong group creation",
        });
        return null;
    }
    return data;
};
const setGroupData = (dispatch) => async (data) => {
    dispatch({ type: "current_group", payload: data });
}
const setInvites = (dispatch) => async (data) => {
    dispatch({ type: "invites", payload: data });
}
const getRequests = (dispatch) => async () => {
    let data;
    try {
        const response = await mainAxios.get("/group/getRequests")
            .then(async (response) => {
                await response;
                data = response.data
                return data;
            })
            .catch(error => {
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
const sendInvite = (dispatch) => async ({ groupId, to }) => {
    let data;
    try {
        const response = await mainAxios.post("/referral/refer", { groupId, to })
            .then(async (response) => {
                data = response.data
                return data;
            })
            .catch(error => {
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
const fetchInvites = (dispatch) => async ({ groupId }) => {
    let data;
    try {
        const response = await mainAxios.post("/referral/get", { groupId })
            .then(async (response) => {
                data = response.data
                console.log("-----invites------")
                console.log(data)
                console.log("invites")
                dispatch({ type: "invites", payload: data });
                return data;
            })
            .catch(error => {
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


const getGroupRequestStatus = (dispatch) => async ({ group, from }) => {

    let data;


    try {
        const response = await mainAxios.post("/group/requst_status", { group, from })
            .then(async (response) => {
                await response;
                console.log("getGroupRequestStatus result ")
                console.log(response.data)

                data = response.data
                return data;

            })
            .catch(error => {

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"


                return null;
            });



    } catch (err) {

        return null;
        showMessage({
            message: "Goup creation failed, try again later",
            type: "info",
            backgroundColor: "#EF4430",
        });
    }

    return data;
};

const processGroupRequest = (dispatch) => async ({ requestId, action }) => {

    let data;

    console.log("processGroupRequest called")
    try {
        const response = await mainAxios.post("/group/process", { requestId, action })
            .then(async (response) => {
                await response;

                console.log("processGroupRequest result ")
                console.log(response.data)

                data = response.data
                return data;

            })
            .catch(error => {

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


const memberDelete = (dispatch) => async ({ groupId, userId }) => {

    let data;

    console.log("processGroupRequest called")
    try {
        const response = await mainAxios.post("/group/deleteMember", { groupId, userId })
            .then(async (response) => {
                await response;


                console.log(response.data)

                data = response.data
                return data;

            })
            .catch(error => {

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong in groupPermission") : "Something went wrong with groupPermission"

                showMessage({
                    message: message,
                    type: "info",
                    backgroundColor: "#EF4430",
                });
                return null;
            });



    } catch (err) {

        showMessage({
            message: "Something went wrong with groupPermission",
            type: "info",
            backgroundColor: "#EF4430",
        });
        return null;


    }

    return data;
};
const GroupPermissions = (dispatch) => async ({ groupId, action, userId }) => {

    let data;

    console.log("processGroupRequest called")
    try {
        const response = await mainAxios.post("/group/permission", { groupId, action, userId })
            .then(async (response) => {
                await response;


                console.log(response.data)

                data = response.data
                return data;

            })
            .catch(error => {

                const message = error.response.data.message ?
                    (!error.response.data.message.errors ? error.response.data.message : "Something went wrong in groupPermission") : "Something went wrong with groupPermission"

                showMessage({
                    message: message,
                    type: "info",
                    backgroundColor: "#EF4430",
                });
                return null;
            });



    } catch (err) {

        showMessage({
            message: "Something went wrong with groupPermission",
            type: "info",
            backgroundColor: "#EF4430",
        });
        return null;


    }

    return data;
};



const uploadGroupPic = (dispatch) => async ({ file, groupId }) => {

    let url = null;

    try {
        const data = new FormData();


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

        const result = await uploadAxios.post(`/group/profile_photo/${groupId}`, data).then(async (response) => {
            await response;
            url = response.data;
            showMessage({
                message: "Group photo uploaded successfully",
                type: "info",
                backgroundColor: "green",
            });



        }).catch(error => {
            console.log(error);


            const message = error.response.data.message ?
                (!error.response.data.message.errors ? error.response.data.message : "Something went wrong in uploading photo") : "Something went wrong in uploading photo"

            showMessage({
                message: message,
                type: "info",
                backgroundColor: "#EF4430",
            });

        });

    } catch (err) {
        console.log(err);


        showMessage({
            message: "Failed to upload pic,try again later",
            type: "info",
            backgroundColor: "#EF4430",
        });

    }

    return url;

}

export const { Provider, Context } = createDataContext(
    groupReducer,
    {
        clearErrorMessage,
        fetchGroup,
        fetchMyGroups,
        fetchAllGroups,
        joinGroup,
        createGroup,
        processGroupRequest,
        fetchPost,
        setGroupData,
        getRequests,
        getGroupRequestStatus,
        memberDelete,
        GroupPermissions,
        uploadGroupPic,
        sendInvite,
        fetchInvites

    },
    {

        errorMessage: "",
        isValidForm: false,
        Requests: [],
        myGroups: [],
        AllGroups: [],
        posts: [],
        inviteData: []

    }

);
// setNumber, VerifyNumber, isNumberValid, number