import request from '@/utils/request';

export function listRecipeV2(data) {
    return request({
        url: '/recipe/list',
        method: 'post',
        data: data
    });
}

export function addRecipe(data){
    return request({
        url: '/recipe/create',
        method: 'post',
        data: data
    })
}

export function updateRecipe(data){
    return request({
        url: '/recipe/update',
        method: 'post',
        data: data
    })
}

export function deleteRecipe(id){
    return request({
        url: '/recipe/delete/' + id,
        method: 'delete'
    })
}