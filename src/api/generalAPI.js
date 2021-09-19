// import basicConfig from '@/utils/basicConfig';
// import axios from "axios";
import request from "@/utils/request";
// import store from '@/store';


export function login(data) {
    return request({
        url: "/login",
        method: "post",
        data: data
    })
}

// export function resetPwd(data) {
//     return request({
//         url: "/user/resetpwd",
//         method: "post",
//         data: data,
//     })
// }

export function getUserInfo() {
    return request({
        url: "/user/info",
        method: "get",//if u want to access body u need to change to post and pass data along//let me show u the shortcut
    })
}