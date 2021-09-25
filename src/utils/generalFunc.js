import { deleteFile } from "@/api/generalAPI";
import serverConfig from "@/utils/serverConfig";
// import bcrypt from "bcryptjs";

export function removeFile(md5) {
    if (urlImg(md5)) {
        return deleteFile(md5);
    }
    else {
        return false;
    }
}

export function urlImg(md5) {
    return typeof md5 === typeof "";
}

export function checkAvatar(item, key) {
    if (item[key] != "" || item[key] != undefined) {
        return item[key];
    }
    else {
        return serverConfig.blank_profile_img;
    }
};

