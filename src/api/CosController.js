import request from "@/utils/request"

// 查询全部工单列表
export const getAccepEventList = (data) => {
    return request({
        method: "GET",
        url: `Cos/getAccepEventList?pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
    })
}
//按照工单查询状态
export const getListCos = (data) => {
    return request({
        method: "GET",
        url: `Cos/getAccepEventBycorrelateid?correlateid=${data.correlateid}&pageNo=${data.pageNo}&pageSize=${data.pageSize}`,
    })
}
//内容状态日志，重置按钮
export const resetState=(data)=>{
    return request({
        method:'post',
        url:`Cos/updateAcceptEventStatusById?id=${data}`
    })
}