<template>
  <div id="login">
      <div class="login-min-body">
      <!--<div class="head-title"></div>-->
          <div class="login-box">
              <div class="login-icon"></div>
              <div class="login-right">
                  <div class="login-title">保密文件借用管理系统</div>
                  <div class="login-main">
                      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                          <el-form-item prop="username" style=" width: 100%;">
                              <div class="login-input">
                                  <i class="icon zhb-iconfont zhb-iconyonghu_0"></i>
                                  <el-input type="text" v-model="ruleForm.username" placeholder="用户名"></el-input>
                              </div>
                          </el-form-item>
                          <el-form-item prop="password" style=" width: 100%;">
                              <div class="login-input">
                                  <i class="icon zhb-iconfont zhb-iconmima"></i>
                                  <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                              </div>
                          </el-form-item>
                          <div style="display: flex;justify-content: space-between">
                              <div class="login-button" @click="submitForm('ruleForm')">登录</div>
                          </div>
                      </el-form>
                  </div>
              </div>
          <!---->


          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data: function(){
    return {
      checked:false,
      ruleForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      let _self = this;
      _self.$refs[formName].validate((valid) => {
        if (valid) {

            //登录
            this.$router.push('/FileTransfer/index');
        } else {
          this.$message.error('用户名或密码不正确!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./css/login.css";
#login {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

::v-deep  .login-box .el-form-item {
  margin-bottom: 15px;
}

::v-deep  .login-btn-box .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #000;
  font-size: 14px;
}
::v-deep  .login-btn-box .el-checkbox {
  color: #fff;
  font-size: 13px;
}
::v-deep  .login-user .el-input__inner {
  height: 50px;
  background: none;
  border: none;
  padding: 0;
}
::v-deep  .login-password .el-input__inner {
  height: 50px;
  background: none;
  border: none;
  padding: 0;
}
</style>
