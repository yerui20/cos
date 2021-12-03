import request from "@/utils/request"
/*用户有关请求的功能
*/
//用户登录
export const login=date=>{
 return request({
    method: "POST",
    url: "/favorite",
    date
  })
}
//获取用户信息
export const getUserInfo=()=>{}
//修改用户信息
export const updateUser=()=>{}