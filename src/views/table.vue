<template>
  <div>
    这里是内容状态日志列表
    {{ info }}
  </div>
</template>

<script >
import Vue from 'vue'
import axios from 'axios'
    export default Vue.extend({
  components: {  },
        data:{
            return:{
                info:null
            }
        },
        mounted (){
             axios
      .get('http://192.168.11.192:8887/cos/vcode')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
        }
    })  
</script>

<style scoped>
</style>