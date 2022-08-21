import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import {
  mainAxios,
  otpAxios,
  uploadAxios
} from "../api/tracker";

import { showMessage, hideMessage } from "react-native-flash-message";

import { navigate } from "../navigationRef";

const delay = ms => new Promise(res => setTimeout(res, ms));

const authReducer = (state, action) => {
  switch (action.type) {
    case "validate_form":
      console.log('isValidForm : ' + JSON.stringify({ ...state, isValidForm: action.payload }));
      return { ...state, isValidForm: action.payload };
    case "validate_user":

      return { ...state, isValidUser: action.payload };

    case "app_init":

      return { ...state, appInit: action.payload };
    case "validate_email":

      return { ...state, isValidEmail: action.payload };
    case "validate_password":

      return { ...state, isValidPassword: action.payload };
    case "validate_number":
      return { ...state, isValidNumber: action.payload };

    case "validate_referal":
      return { ...state, isValidReferral: action.payload };

    case "set_number":
      return { ...state, number: action.payload };
    case "set_number_verification":
      return { ...state, isNumberVerified: action.payload };


    case "add_error":
      console.log("errorMessage " + action.payload)
      return { ...state, errorMessage: action.payload };


    case "add_number":
      console.log(action.payload)
      return { ...state, mobile: action.payload };

    case "add_otp":
      console.log(action.payload)
      return { ...state, otp: action.payload };


    case "add_more_ranks":

      return { ...state, ranks: [...state.ranks, ...action.payload] };
    case "add_ranks":

      return { ...state, ranks: action.payload };

    case "add_report_list":

      return { ...state, reportList: action.payload };
    case "add_user":

      return { ...state, user: action.payload };
    case "signin":
      return { ...state, errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, isValidUser: true, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "", appInit: true };
    default:
      return state;
  }
};


const SetAuthorizationHeader = (token) => {
  mainAxios.defaults.headers.post["Authorization"] = 'Bearer ' + token;
  mainAxios.defaults.headers.get["Authorization"] = 'Bearer ' + token;
  uploadAxios.defaults.headers.post["Authorization"] = 'Bearer ' + token;
  uploadAxios.defaults.headers.get["Authorization"] = 'Bearer ' + token;
  mainAxios.defaults.headers.delete["Authorization"] = 'Bearer ' + token;

}


const tryLocalSignin = (dispatch) => async (fetchPost) => {
  dispatch({ type: "app_init", payload: false });


  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    SetAuthorizationHeader(token)
    navigate("mainStack");
    await fetchUser();




    dispatch({ type: "app_init", payload: true });

  } else {
    const init = await AsyncStorage.getItem("init");
    await delay(300)
    if (init) {
      navigate("Signin");
    } else {
      navigate("SetupScreen");

    }
    dispatch({ type: "app_init", payload: true });

  }


};

const DeleteToken = async () => {
  await AsyncStorage.removeItem('token');
}

const intialSetupDone = (dispatch) => async () => {
  await AsyncStorage.setItem("init", 'done');
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const userNameValidator = (dispatch) => (isValidUser) => {
  dispatch({ type: "validate_user", payload: isValidUser });
}

const emailValidator = (dispatch) => (isValidEmail) => {
  dispatch({ type: "validate_email", payload: isValidEmail });
}
const addUser = (dispatch) => (user) => {
  dispatch({ type: "add_user", payload: user });
}
const addReportList = (dispatch) => (list) => {
  dispatch({ type: "add_report_list", payload: list });
}
const validateForm = (dispatch) => (isValidForm) => {
  dispatch({ type: "validate_form", payload: isValidForm });
}
const passwordValidator = (dispatch) => (isValidPassword) => {
  dispatch({ type: "validate_password", payload: isValidPassword });
}
const referalValidator = (dispatch) => (isValid) => {
  dispatch({ type: "validate_referal", payload: isValid });
}

const numberValidator = (dispatch) => (isValidNumber) => {
  dispatch({ type: "validate_number", payload: isValidNumber })
}

const setMobileNumber = (dispatch) => (number) => (
  dispatch({ type: "set_number", payload: number })
)

const setMobileVerification = (dispatch) => (isVerified) => (
  dispatch({ type: "set_number_verification", payload: isVerified })
)


const signup = (dispatch) => async ({ name, email, password, referalCode, otp, mobile, dob, gender }) => {

  try {
    const response = await mainAxios.post("/signup", { name, email, password, referalCode, otp, mobile, dob, gender })
      .then(async (response) => {
        await response;
        console.log(response)
        console.log(response.data.message.token)
        await AsyncStorage.setItem("token", response.data.message.token);
        SetAuthorizationHeader(response.data.message.token)
        dispatch({ type: "signin", payload: response.data.message.token });
        navigate("mainStack");


        return true;
      })
      .catch(error => {
        console.log(error.response);


        if (error.response.status === 404) {
          showMessage({
            message: "could not reach to server,please try again later",
            type: "info",
            backgroundColor: "red",
          });


          return null;

        }


        const message = error.response.data.message ?
          (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"
        dispatch({
          type: "add_error",
          payload: message,
        });

        return null;
      });

  } catch (err) {
    console.log(response);
    dispatch({
      type: "add_error",
      payload: error.response.data.message,
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {

  try {
    const response = await mainAxios.post("/login", { email, password })
      .then(async (response) => {
        await AsyncStorage.setItem("token", response.data.message.token);
        SetAuthorizationHeader(response.data.message.token)
        dispatch({ type: "signin", payload: response.data.message.token });
        navigate("mainStack");


        return true;

      })
      .catch(error => {

        if (error.response.status === 404) {
          showMessage({
            message: "could not reach to server,please try again later",
            type: "info",
            backgroundColor: "red",
          });



          return null;

        }

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
};


const fetchStoredUser = (dispatch) => async () => {

  return state.user;
}

const fetchUser = (dispatch) => async () => {
  let data;


  try {
    const response = await mainAxios.get("/users/my")
      .then(async (response) => {
        await response;
        data = response.data;
        console.log("fetchUser called  \n" + data)
        console.log(data)
        dispatch({ type: "add_user", payload: data });
        return data;


      })
      .catch(error => {
        console.log("err: " + error);

        console.log("error.status: " + error.response.status)
        if (error.response.status === 404) {
          showMessage({
            message: "could not fetch user data, please login",
            type: "info",
            backgroundColor: "red",
          });

          DeleteToken();

          navigate('loginFlow')
        }
        return null;

        const message = error.response.data.message ?
          (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"

          ;

      });



  } catch (err) {
    console.log("err: " + err);
    return null;


  }
  return data;
};


const fetchReportList = (dispatch) => async () => {
  let data;
  console.log("fetchReportList calling...............  \n" + data)

  try {
    const response = await mainAxios.get("/report/get/")
      .then(async (response) => {
        await response;
        data = response.data;
        console.log("fetchReportList called  \n" + data.data)
        console.log(data)
        dispatch({ type: "add_report_list", payload: data.data });
        return data;


      })
      .catch(error => {
        console.log("fetchReportList ==> \n -->" + error);
        return null;

        const message = error.response.data.message ?
          (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"

          ;

      });



  } catch (err) {
    return null;
    console.log("err: " + err);

  }
  return data;
};



const fetchMyPosts = (dispatch) => async (page) => {
  let nextPage = 1;
  let post_count = 0;

  try {
    const response = await mainAxios.get(`/posts/my?since=${page}`)
      .then(async (response) => {
        await response;
        //  console.log(response.data);

        nextPage = response.data.page;
        post_count = response.data.posts.length;


        if (page > 1) {
          dispatch({ type: "add_more_myposts", payload: response.data.posts });

          return;
        }
        dispatch({ type: "add_myposts", payload: response.data.posts });






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

  return { nextPage, post_count };
};

const fetchUsersRanks = (dispatch) => async (page) => {
  let nextPage = 1;
  let list_count = 0;

  try {
    const response = await mainAxios.get(`/users/ranks?since=${page}`)
      .then(async (response) => {
        await response;
        nextPage = response.data.page;
        list_count = response.data.list.length;
        if (page > 1) {
          dispatch({ type: "add_more_ranks", payload: response.data.list, page: page });
        } else {
          dispatch({ type: "add_ranks", payload: response.data.list });
        }
      })
      .catch(error => {
        console.log(error);
        return null;
        const message = error.response.data.message ?
          (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"
          ;
      });
  } catch (err) {
    console.log("err: " + err);
    return null;
  }
  return { nextPage, list_count };
};
const fetchValueVideos = (dispatch) => async (page) => {

};


const SendOtp = (dispatch) => async ({ mobileNumber }) => {

  let number = mobileNumber;
  try {
    const response = await mainAxios.post("/generateOTP", { mobile: mobileNumber })
      .then(async (response) => {


        await response;

        let isSuccess = response.data.data.type === "success";
        if (isSuccess) {

          dispatch({
            type: "add_number",
            payload: number,
          });
          navigate("EnterOtpScreen");
          setMobileVerification(true);

        } else {

          const message = response.data.data.message;
          console.log(message)

          dispatch({
            type: "add_error",
            payload: message,
          });
        }


      })
      .catch(error => {


        console.log(error.response);


        if (error.response.status === 404) {
          showMessage({
            message: "could not reach to server,please try again later",
            type: "info",
            backgroundColor: "red",
          });


          return;

        }


        const message = error.response.data.message ?
          (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"
        dispatch({
          type: "add_error",
          payload: message,
        });
      });

  } catch (err) {
    console.log(response);
    dispatch({
      type: "add_error",
      payload: error.response.data.message,
    });
  }
};




const uploadProfileImage = (dispatch) => async ({ file }) => {


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

    const result = await uploadAxios.post('/users/profile_photo', data).then(async (response) => {
      await response;

      console.log(response.data);
      showMessage({
        message: "Profile photo uploaded successfully",
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

}








const VerifyOtp = (dispatch) => async ({ mobileNumber, otp }) => {



  try {
    const response = await mainAxios.post("/verify", { mobile: mobileNumber, otp: otp })
      .then(async (response) => {
        await response;

        let isSuccess = response.data.data.type === "success";
        if (isSuccess) {

          dispatch({
            type: "add_otp",
            payload: otp,
          });
          navigate("SignupScreen");
          setMobileVerification(true);

          return true;
        } else {

          const message = response.data.data.message;
          console.log(message)

          dispatch({
            type: "add_error",
            payload: message,
          });

          return null;
        }



      })
      .catch(error => {
        console.log(error.response);


        if (error.response.status === 404) {
          showMessage({
            message: "could not reach to server,please try again later",
            type: "info",
            backgroundColor: "red",
          });


          return null;
        }


        const message = error.response.data.message ?
          (!error.response.data.message.errors ? error.response.data.message : "Something went wrong with sign in") : "Something went wrong with sign in"
        dispatch({
          type: "add_error",
          payload: message,
        });
      });

  } catch (err) {
    console.log(response);
    dispatch({
      type: "add_error",
      payload: error.response.data.message,
    });
    return null;
  }
};


const signout = (dispatch) => async () => {
  navigate("loginFlow");


  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });


};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signout,
    signup,
    SendOtp,
    VerifyOtp,
    setMobileNumber,
    setMobileVerification,
    clearErrorMessage,
    tryLocalSignin,
    userNameValidator,
    emailValidator,
    passwordValidator,
    validateForm,
    numberValidator,
    fetchUser,
    fetchUsersRanks,
    referalValidator,
    uploadProfileImage,
    fetchStoredUser,
    intialSetupDone,
    fetchReportList

  },
  {
    token: null,
    errorMessage: "",
    isValidUser: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidForm: false,
    isValidReferral: false,
    user: null,
    ranks: [],
    reportList: [],
    appInit: false,
  }

);
// setNumber, VerifyNumber, isNumberValid, number