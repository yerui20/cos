// axios 封装模块
import axios from 'axios'
//创建一个axios实例，就是复制了一个axios
//我们通过这个实例去发请求，

const request =axios.create({
    baseURL:"http://192.168.11.3:8887/cos/"
})

export default request
