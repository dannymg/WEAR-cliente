import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://wear-backend-dev-rqtt.1.us-1.fl0.io",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };
    const token = localStorage.getItem("token") || "";
    if (token) {
      config.headers["x-access-token"] = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
