import request from "@/utils/request"

// 查询全部工单列表
 export const getAccepEventList=()=>{
     return request({
         method:"GET",
         url:"getAccepEventList"
     })
 }