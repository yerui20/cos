import request from "@/utils/request"

// 查询全部工单列表
export const getAccepEventList = (data) => {
    return request({
        method: "GET",
        url: `Cos/getAccepEventList?pageNo=${data.pageNo}&pageSize=${data.pagesize}`,
    })
}