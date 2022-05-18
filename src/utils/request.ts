import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
    // baseURL:"http://localhost:8080/api",
    baseURL:import.meta.env.VITE_API_BaseUrl,
    timeout:50000
})

request.interceptors.request.use(config => {
// Do something before request is sent
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});

request.interceptors.response.use(response => {
// Do something before response is sent
return response;
},error => {
// Do something with response error
return Promise.reject(error);
});



//--------------------------------------------------------------------默认写法_封装方式 一 --------------------------------------------------------------
// export default request
//--------------------------------------------------------------------默认写法_封装方式 二 --------------------------------------------------------------
//调整,泛型方式
export default<T=any>(config:AxiosRequestConfig)=>{
    return request(config).then(res=>{
        return res.data as T
    })
}