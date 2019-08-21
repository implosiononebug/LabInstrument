<template>
  <div class="cy-content justify-center align-center">
    <el-card class="cy-content-image-group"
             shadow="never">
      <img class="cy-content-image"
           src="https://www.agilent.com/home_images/dupinfenxi-hero-cn.jpeg">
    </el-card>
    <el-card class="box-card"
             shadow="never">
      <el-tabs class="login-gruop"
               v-model="activeName"
               type="card"
               @tab-click="handleClick">
        <!-- 账号登陆部分 -->
        <el-tab-pane label="账号密码"
                     name="first">
          <div class="login-title">
            <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1 user-img"></i>
            <p>登陆账户</p>
            <span class="text-muted">在下方输入您的账户和密码</span>
          </div>
          <el-row class="input-group">
            <input v-model="form.username"
                   class="input-control"
                   type="text"
                   placeholder="用户名">
            <div class="input-icon-container">
              <i class="input-icon icon-user text-muted"></i>
            </div>
          </el-row>
          <el-row class="input-group">
            <input v-model="form.userpsd"
                   class="input-control"
                   type="password"
                   placeholder="密码">
            <div class="input-icon-container">
              <i class="input-icon icon-lock2 text-muted"></i>
            </div>
          </el-row>
          <el-row class="input-group">
            <el-button @click="handleClickGetToken"
                       class="btn btn-primary btn-block">
              登陆<i class="icon-circle-right2 ml-3"></i>
            </el-button>
          </el-row>
        </el-tab-pane>
        <!--  账号登陆部分结束 -->
        <!-- 动态登陆部分 -->
        <el-tab-pane label="动态密码"
                     name="second">
          <div class="login-title">
            <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1 user-img"></i>
            <p>登陆账户</p>
            <span class="text-muted">在下方输入您的账号和验证码</span>
          </div>
          <el-row class="input-group">
            <input class="input-control"
                   type="text"
                   placeholder="用户名">
            <div class="input-icon-container">
              <i class="input-icon icon-user text-muted"></i>
            </div>
          </el-row>
          <el-row class="input-telphone-group">
            <input class="input-control"
                   type="text"
                   placeholder="验证码">
            <div class="input-icon-container">
              <i class="input-icon icon-iphone text-muted"></i>
            </div>
            <el-button type="primary"
                       size="mini"
                       class="button-primary">
              获取验证码
            </el-button>
          </el-row>
          <el-row class="input-group">
            <el-button @click="handleClickGetToken"
                       class="btn btn-primary btn-block">
              登陆<i class="icon-circle-right2 ml-3"></i>
            </el-button>
          </el-row>
        </el-tab-pane>
        <!-- 动态登陆部分结束 -->
        <el-tab-pane label="扫一扫"
                     name="third">
          <el-card class="two-code-box">
            <img class="two-code"
                 src="data:image/png;base64,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"
                 alt="">
          </el-card>
          <el-row class="input-group">
            <span>打开微信扫一扫</span>
          </el-row>
        </el-tab-pane>
        <el-row class="register-group">
          <el-link type="info"
                   :underline="false">注册账号</el-link>
          <el-link class="elem-primary"
                   type="primary"
                   :underline="false">忘记密码?</el-link>
        </el-row>
        <el-row>
          <a href="#"
             class="elem-primary font-size-sm ">Forgot password?</a>
        </el-row>
      </el-tabs>
    </el-card>

  </div>
</template>

<style scoped src="../../assets/css/components/CyLogin/CyContent.css"></style>

<script>
import axios from 'axios'
import store from 'store'
import instance from '../../assets/js/axios'

export default {
  name: 'CyContent',
  data () {
    return {
      activeName: 'first',
      form: {
        username: '',
        userpsd: ''
      }
    }
  },
  methods: {
    handleClickGetToken () {
      if (this.form.username == '' || this.form.userpsd == '') {
        this.$notify.error({
          title: '错误',
          message: '请输入账号或密码'
        });
        this.form = {
          username: '',
          userpsd: ''
        }
      } else if (this.form.username != 'admin' || this.form.userpsd != '123456') {
        this.$notify.error({
          title: '错误',
          message: '账号或密码错误，请重新输入'
        });
        this.form = {
          username: '',
          userpsd: ''
        }
      } else if (this.form.username == 'admin' && this.form.userpsd == '123456') {
        instance.get('/mock/token.json', {
        }).then(res => {
          store.set("token", res.data.token);
          store.set("username", this.form.username);
          store.set('userpsd', this.form.userpsd);
          let flag = true;
          this.$store.commit('login', flag);
          this.$router.push('/home/index');
        })
      }
    },
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>