<template>
    <div class="cy-content justify-center align-center">
        <el-card class="box-card" shadow="never">
            <div class="login-title">
                <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1 user-img"></i>
                <p>登陆账户</p>
                <span class="text-muted">在下方输入您的账户</span>
            </div>
            <el-row class="input-group">
              <input class="input-control" type="text" placeholder="Username">
              <div class="input-icon-container" >
                <i class="input-icon icon-user text-muted"></i>
              </div>
            </el-row>
            <el-row class="input-group">
              <input class="input-control" type="password" placeholder="Password">
              <div class="input-icon-container">
                <i class="input-icon icon-lock2 text-muted"></i>
              </div>
            </el-row>
            <el-row class="input-group">
              <el-button  @click="handleClickGetToken" class="btn btn-primary btn-block">
                登陆<i class="icon-circle-right2 ml-3"></i>
              </el-button>
            </el-row>
            <el-row>
              <a href="#" class="elem-primary font-size-sm ">Forgot password?</a>
            </el-row>
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
    data() {
      return {
      }
    },
    methods: {
      handleClickGetToken() {
        var  a = 1
        var b = 2
        instance.get('/mock/token.json', {

        }).then(res => {
            store.set("token", '213123123')
        })

        var c = 4
      }
    }
}
</script>