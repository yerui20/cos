import request from '@/utils/request'

//日志查询列表
export const recordList = (data) => {
    return request({
        method:'get',
        url:`Cos/getTaskhandleyirecordList?pageNo=${data.pageNo}&pageSize=${data.pageSize}`
    })
}
//条件筛选
export const screen=(data)=>{
    return request({
        method:'get',
        url:`Cos/getTaskhandleyirecordByStatusOrSendnod?pageNo=${data.pageNo}&pageSize=${data.pageSize}&sendnode=${data.sendnode}&state=${data.state}`
    })
}