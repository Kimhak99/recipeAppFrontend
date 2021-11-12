import { deleteFile } from "@/api/generalAPI";
import basicConfig from "@/utils/basicConfig";
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
