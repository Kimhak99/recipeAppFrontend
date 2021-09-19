import request from '@/utils/request';

export function listUser(data) {
    return request({
        url: '/user/list',
        method: 'post',
        data: data
    });
}

export function getUser(id){
    return request({
        url: '/user/get/' + id,
        method: 'get',
        data: data
    })
}

export function addUser(data){
    return request({
        url: '/user/create',
        method: 'post',
        data: data
    })
}

export function updateUser(data){
    return request({
        url: '/user/update',
        method: 'post',
        data: data
    })
}

export function deleteUser(id){
    return request({
        url: '/user/delete/' + id,
        method: 'delete'
    })
}