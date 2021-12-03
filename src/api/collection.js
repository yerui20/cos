import request from '@/utils/request'
//提交收藏
export const SubmitCollection=(date)=>{
    return request({
        method: "POST",
        url: "/favorite",
        date
      })

     
}

//取消收藏
export const CancelCollection=(date)=>{
    return request({
        method: "POST",
        url: "/favorite",
        date
    })
}

//获取用户收藏

export const getCollection=(date)=>{
    return request({
        method: "GET",
        url: "getfavorite?pageNo=1&pageSize=10&accountID=test05@zi",
        date
    })
}
// 用户是否收藏
export const isCollection=(date)=>{
    return request({
        method: "GET",
        url: "favorite",
        date
    })
}