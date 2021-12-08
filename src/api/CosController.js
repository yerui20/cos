import request from "@/utils/request"

// 查询全部工单列表
export const getAccepEventList = (date) => {
    return request({
        method: "GET",
        url: "Cos/getAccepEventList",
        date,

    })
}