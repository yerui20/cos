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
              type="password"
              placeholder="密码"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-button
            type="primary"
            @click="onLogin('loginForm')"
            class="submit_btn"
            :loading="loginLoading"
            >提交</el-button
          >
        </el-form>
        <p class="tips">温馨提示</p>
    
      </section>
    </transition>
  </div>
</template>

<script >
import { login } from "@/api/user";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginLoading: false,
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