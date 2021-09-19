import request from '@/utils/request';

export function listComment(data) {
    return request({
        url: '/comment/list',
        method: 'post',
        data: data
    });
}

export function addComment(data){
    return request({
        url: '/comment/create',
        method: 'post',
        data: data
    })
}

export function updateComment(data){
    return request({
        url: '/comment/update',
        method: 'post',
        data: data
    })
}

export function deleteComment(id){
    return request({
        url: '/comment/delete/' + id,
        method: 'delete'
    })
}