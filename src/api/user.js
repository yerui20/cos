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
//获取用户信息
export const logout=()=>{
  return request({
    method:"POST",
    url:"CosUser/logout"
  })
}
//修改用户信息
export const updateUser=()=>{}

//查询用户列表
export const userList=(data)=>{
return request({
  method:'get',
  url:`CosUser/getCosUserList?pageNo=${data.pageNo}&pageSize=${data.pageSize}`
})
}