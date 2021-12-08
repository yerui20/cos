<template>
  <div class="login_page">
    <transition>
      <section class="form_contianer">
        <div class="manage_tip">
          <p>COS工单查询系统</p>
        </div>
        <el-form :model="loginForm" :rules="formRules" ref="loginForm">
          <el-form-item prop="account">
            <el-input
              v-model="loginForm.account"
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
              <i
                class="el-icon-view el-input__icon"
                slot="suffix"
                @click="showPassword"
              ></i>
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
                  <Sidentify :identifyCode="identifyCode" />
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
import Sidentify from "@/components/Sidentify.vue";

export default {
  name: "Login",
  components: { Sidentify },
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.identifyCode !== value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        account: "",
        password: "",
        code: "",
      },
      isDebugLogin: false,
      identifyCode: "",
      identifyCodes: "1234567890abcdefghijklmnopqistuvwxyz",
      loginLoading: false,
      passwordType: "password",
      isDebugLogin: false,
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
          { required: true, message: "请输入正确密码", trigger: "change" },
        ],
        code: [
          { required: true, message: "请输入正确验证码", trigger: "blur" },
          { validator: validateCode, trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    isDebugLogin(v) {
      if (v) {
        this.loginForm.password = "123";
        this.refreshCode();
      }
    },
    identifyCode(v) {
      this.isDebugLogin && (this.loginForm.code = v);
    },
  },
  methods: {
    //验证码函数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    //密码显示
    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
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
      this.login();
      //处理后的结果
      //   成功

      //   失败
    },
    login() {
      this.loginLoading = true;
      const logindata = { account: "", password: "" };
      logindata.account=this.loginForm.account
       logindata.password=this.loginForm.password
      console.log(this.loginForm);
      //验证
      login(this.loginForm).then((res) => {
        this.loginLoading = false;
        const singe = res.data.meta.success;
        if (singe) {
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$router.push({ name: "Index" });
        } else {
          this.$message({
            message: res.data.data,
            type: "fail",
          });
        }
        console.log(res);
      });
    },
  },
  created() {
    this.refreshCode();
  },
  mounted() {},
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