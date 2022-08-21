
import createDataContext from "./createDataContext";
import { mainAxios, } from "../api/tracker";
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
const fetchTasks = (dispatch) => async () => {
    let data;

    console.log("fetchTasks called")
    try {
        const response = await mainAxios.get("/tasks")
            .then(async (response) => {
                await response;
                data = response.data;
                console.log("get task ",data);
                dispatch({ type: "add", payload: response.data });
                return data;


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

                return null;
            });



    } catch (err) {

        console.log("err: " + err);
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in",
        });
        return null;
    }
    return data;
};
const fetchTaskStatus = (dispatch) => async ({ taskId }) => {

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
export const { Provider, Context } = createDataContext(
    taskReducer,
    {
        clearErrorMessage,
        fetchTasks,
        fetchTaskStatus
    },
    {
        errorMessage: "",
        isValidForm: false,
        tasks: [],
    }
);
// setNumber, VerifyNumber, isNumberValid, number