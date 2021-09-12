import basicConfig from "./basicConfig";
import axios from "axios";
import meta from './enum'

const service = axios.create({
    baseURL: basicConfig.api_url,
    timeout: 15000
})

const token = "";

service.interceptors.request.use(config => {
    config.headers['Authorization'] = token;
    config.headers['Content-Type'] = 'application/json';

    if(config.method === 'post') {
        config.data = JSON.stringify(config.data);
    }

    return config;
},
    error => {
        Promise.reject(error);
    }
);

service.interceptors.response.use(response => {
    const res = response.data;

if(res.meta === meta.TOKENEXPIRE) {
    alert("Token Expired! Please Login Again!");
}
else {
    return res;
}
},
    error => {
        return Promise.reject(error.response.data);
    }
);

export default service;