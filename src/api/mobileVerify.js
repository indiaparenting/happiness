//https://api.thehappinesschallenge.in/v1//user/regotp/create
//https://api.thehappinesschallenge.in/v1/user/regotp/verify
import axios from "axios";


export default axios.create({
  baseURL: "https://api.thehappinesschallenge.in/v1//user/regotp/",
});


