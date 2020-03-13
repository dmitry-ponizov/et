import axios from 'axios';
const BASE_URL = "http://192.168.219.87/api/json/";
// const BASE_URL = "http://10.8.2.230:8085/api/json/";

export const axiosInstance = axios.create({ baseURL: BASE_URL})
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// axios.defaults.withCredentials = true;


axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return error.response && error.response.statusText ? error.response.statusText : error;
    }
);