<template>
  <el-form
    :model="registerForm"
    status-icon
    :rules="rules"
    ref="registerForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="密码" prop="pass">
      <el-input
        type="password"
        v-model="registerForm.pass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input
        type="password"
        v-model="registerForm.checkPass"
        autocomplete="on"
      ></el-input>
    </el-form-item>
    <el-form-item prop="email" label="邮箱">
         <el-input v-model="registerForm.email" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('registerForm')"
        >提交</el-button
      >
      <el-button @click="resetForm('registerForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "register",

  data() {return{
      registerForm:{
          password:"",
          checkPass:""
      }
  }},
  methods: {},

  // data(){
  //     return {
  //        registerForm:{
  //            account:"",
  //            createtime:"",
  //            email:"",
  //            id:"",
  //            lastlogintime:"",
  //            lastupdatepasswordtime:"",
  //            logincount:"",
  //            name:"",
  //            note:"",
  //            password:"",
  //            picture:"",
  //            role:"",
  //            sex:"",
  //            updatetime:"",
  //            usertype:"",
  //        }
  //     }

  // }
});
</script>




<style scoped>
</style>