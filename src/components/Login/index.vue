<template>
    <div class='login'>
      <div class="login-box">
        <h3>基于vue的后台管理系统</h3>
        <el-form ref="loginInfo" :model="loginInfo" :rules="rules" size="medium" class="login-info">
          <el-form-item prop="name">
            <el-input v-model="loginInfo.name" placeholder="用户名" prefix-icon="iconfont icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="loginInfo.pass" type="password" placeholder="密码" prefix-icon="iconfont icon-pass" @keyup.enter.native="submitInfo('loginInfo')"></el-input>
          </el-form-item>
          <el-form-item class="login-info-sub">
            <el-button type="primary" @click="submitInfo('loginInfo')" class="login-info-login">登录</el-button>
            <!-- <el-button @click="resetInfo('loginInfo')">重置</el-button> -->
          </el-form-item>
          <div class="login-tips">
            <p class="login-tips-title">温馨提示：</p>
            <p class="login-tips-info">账号: admin, 密码: admin</p>
          </div>
        </el-form>
      </div>

    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {},
    data () {
      return {
        loginInfo: {
          name: '',
          pass: ''
        },
        rules: {
          name: [{
            required: true, message: '请输入用户名', trigger: 'blur'
          }],
          pass: [{
            required: true, message: '请输入密码', trigger: 'blur'
          }]
        }
      }
    },
    computed: {},
    methods: {
      ...mapActions([
        'login'
      ]),
      submitInfo (formName) {
        if (this.loginInfo.name === '' || this.loginInfo.pass === '') {
          this.$message.warning('请输入账号和密码，再进行登录！')
          return
        }
        this.login(this.loginInfo).then(res => {
          this.$router.push({
            path: '/'
          })
        }).catch(error => {
          this.$message.error(error)
        })
      },
      resetInfo (formName) {
        this.$refs[formName].resetFields()
      }
    },
    created () {
    }
  }
</script>

<style lang="less" scoped>
    @import "./../../common/styles/mixins.less";
    .login{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: #00b1b3;
      &-box{
        margin-top: -160px;
        text-align: center;
        h3{
          width: 330px;
          margin-bottom: 16px;
          font-size: 18px;
          color: #fff;
        }
      }
      &-info{
        padding: 30px 20px 10px 20px;
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 5px 5px 8px rgba(0, 0, 0, .3);
        &-login{
          width: 100%;
          border-color: #00b1b3;
          background-color: #00b1b3;
        }
        &-sub{
          margin-top: 30px;
        }
      }
      &-tips{
        padding-bottom: 10px;
        font-size: 12px;
        color: #00b1b3;
        &-title{
          text-align: left;
        }
        &-info{
          margin-left: 60px;
          text-align: left;
        }
      }
    }
</style>
