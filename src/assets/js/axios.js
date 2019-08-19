import axios from 'axios'
import store from 'store'

const instance = axios.create({
    timeout: 1000
})

instance.interceptors.request.use(function (config) {
    const token = store.get('token')
    config.headers.token = token
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

export default instance