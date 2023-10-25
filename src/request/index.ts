import axios from "axios";

const instance = axios.create( {
  baseURL: 'http://localhost:3000/api', // 服务器url
  timeout: 20000 // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err)
});

// 响应拦截器
instance.interceptors.response.use(res => {
  return res.data
}, err => Promise.reject(err));

export default instance;