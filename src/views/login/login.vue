<template>
  <div id="login">

  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
@import 'css/login.css';
  #login{
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }
/deep/ .login-box .el-form-item{margin-bottom: 15px;}
/deep/ .login-btn-box .el-checkbox__input.is-checked+.el-checkbox__label{color:#000;
  font-size: 14px;}
/deep/ .login-btn-box .el-checkbox{color:#fff;
  font-size: 13px;}
/deep/ .login-user .el-input__inner{
  height: 50px;
  background: none;
  border:none;
  padding: 0;
}
/deep/ .login-password .el-input__inner{
  height: 50px;
  background: none;
  border:none;
  padding: 0;
}
</style>