import request from '@/utils/request';

export function listCategory(data) {
    return request({
        url: '/category/list',
        method: 'post',
        data: data
    });
}

export function addCategory(data){
    return request({
        url: '/category/create',
        method: 'post',
        data: data
    })
}

export function updateCategory(data){
    return request({
        url: '/category/update',
        method: 'post',
        data: data
    })
}

export function deleteCategory(id){
    return request({
        url: '/category/delete/' + id,
        method: 'delete'
    })
}