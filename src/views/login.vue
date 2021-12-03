<template>
  <div class="login_page">
    <transition>
      <section class="form_contianer">
        <div class="manage_tip">
          <p>IPtv后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="formRules" ref="loginForm">
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :type="passwordType"
              placeholder="密码"
              v-model="loginForm.password"
               auto-complete="off"
            >
            <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-row :span="24">
              <el-col :span="12">
            <el-input
            auto-complete="off"
            size=""
              placeholder="请输入验证码"
              v-model="loginForm.code"
               @keyup.enter.native="submitForm('loginForm')"
            ></el-input>
              </el-col>
              <el-col :span="12">
                <div class="login-code" @click="refreshCode">
                        <!--验证码组件-->
                        <Sidentify :identifyCode="identifyCode"></Sidentify>
                    </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-button
            type="primary"
            @click="onLogin('loginForm')"
            class="submit_btn"
            :loading="loginLoading"
            >登录</el-button
          >
        </el-form>
    
      </section>
    </transition>
  </div>
</template>

<script >
import { login } from "@/api/user";
import Sidentify from "@/components/Sidentify.vue"
export default {
  name: "Login",
  components:{Sidentify},
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code:""
      },
      loginLoading: false,
      identifyCode: '1234',
      passwordType: 'password',
      formRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "change",
          },
        ],
        password: [
          { required: true, message: "请输入正确用户名", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    //验证码的函数
    randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
     refreshCode() {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        },
    makeCode(o,l){
        for(let i=0;i<l;i++){
          this.identifyCode +=this.identifyCode[
            this.randomNum(0,this.identifyCode.length)
          ]
        }
        },

    showPassword(){
      this.passwordType === ''
                ? (this.passwordType = 'password')
                : (this.passwordType = '')
    },
    onLogin() {
      //获取表单数据
      const loginForm = this.loginForm;
      //表单验证
      this.$refs["loginForm"].validate((valid, err) => {
        if (!valid) {
          return;
        }
      });
      //通过验证，提交登录
      this.login()
      //处理后的结果
      //   成功
      //   失败
    },
    login() {
      this.loginLoading = true;

      //验证
      login(this.loginForm)
        .then((res) => {
          console.log("res");
          this.loginLoading = false;
        })
        .catch((err) => {
          console.log("登录失败", err);
          this.loginLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.login_page {
  background-color: #324057;
  height: 100vh;
}

.form_contianer {
  @include wh(230px, 320px);
  @include middle(230px, 320px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p {
      font-size: 34px;
      color: #fff;
    }
  }
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tips {
  font-size: 12px;
  color: rgb(216, 11, 11);
}
</style>