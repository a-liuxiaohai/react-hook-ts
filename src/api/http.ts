import axios from "axios";

const $http = axios.create({
  // baseURL: process.env.REACT_APP_USERURL,
  timeout: 5000,
});

$http.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

$http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
$http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default $http;
