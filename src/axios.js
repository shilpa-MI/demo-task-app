import Vue from "vue";
import axios from "axios";


const ApiService = axios.create({
  baseURL: "https://devapi.wurkzen.com/v1/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Requested-With": "XMLHttpRequest",
  },
});


ApiService.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
     // TODO 404
    } else {
      return Promise.reject(error);
    }
  }
);

Vue.prototype.$api = ApiService;

export { ApiService };
