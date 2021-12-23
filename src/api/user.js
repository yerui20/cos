import request from "@/utils/request"
/*用户有关请求的功能
*/
//用户登录
export const login=(date)=>{
 return request({
    method: "POST",
    url: `CosUser/checkLogin?account=${date.account}&password=${date.password}`,
    
  })
}

//查询用户列表
export const userList=(data)=>{
return request({
  method:'get',
  url:`CosUser/getCosUserList?pageNo=${data.pageNo}&pageSize=${data.pageSize}`
})
}

//新增用户
export const newUser=(data)=>{
  return request({
    method:'post',
    url:'CosUser/postCosUserList',
    data
  })
}
//修改用户
export const ChangeUser=(data)=>{
  return request({
    method:'post',
    url:'CosUser/putCosUserList',
    data
  })
}
//删除用户
 export const deleteUser=(data)=>{
  return request({
    method:'post',
    url:`CosUser/deleteCosUserList?id=${data.id}&zid=${data.zid}`,
    data
  })
 }