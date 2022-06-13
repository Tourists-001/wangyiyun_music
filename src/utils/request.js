import axios from 'axios';

const request = axios.create({
  timeout: 5000,
})


// 添加响应拦截器
request.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  console.log('数据请求错误',error)
  return Promise.reject(error);
});
export default request