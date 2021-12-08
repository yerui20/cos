import request from "@/utils/request"
/*用户有关请求的功能
*/
//用户登录
export const login=date=>{
 return request({
    method: "POST",
    url: "CosUser/checkLogin",
    date
  })
}
//获取用户信息
export const logout=()=>{
  return request({
    method:"POST",
    url:"CosUser/logout"
  })
}
//获取验证码

//修改用户信息
export const updateUser=()=>{}