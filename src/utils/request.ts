import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "https://api.open-meteo.com/v1", // 基础 API 地址
  timeout: 5000, // 超时时间 5s
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("请求错误:", error);
    return Promise.reject(error);
  }
);

export default request;
