import axios from "axios";


axios.defaults.headers.post["Content-Type"] = "application/json";



const SetAuthorizationHeader = (token) => {
  mainAxios.defaults.headers.post["Authorization"] = 'Bearer ' + token;
}



const url = 'https://api.thehappinesschallenge.in/v1/'


const devUrl = 'https://api.thehappinesschallenge.in/v1/'

const mainAxios = axios.create({
  baseURL: url
});

const otpAxios = axios.create({
  baseURL: 'https://api.thehappinesschallenge.in/v1//user/regotp'
});



const uploadAxios = axios.create({
  baseURL: url//'',
});

uploadAxios.defaults.headers.post["Content-Type"] = "multipart/form-data";


export {
  mainAxios,
  otpAxios,
  uploadAxios
};