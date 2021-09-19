import basicConfig from "./basicConfig";
import axios from "axios";
import {meta} from './enum'
import store from "../store";

const service = axios.create({
    baseURL: basicConfig.api_url,
    timeout: 15000
})

service.interceptors.request.use(config => {
    config.headers['authorization'] = store.getters.token;
    config.headers['Content-Type'] = 'application/json';

    if(config.method === 'post') { //=== used by react by defult, unless u want to strictly check type too, just a head up
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