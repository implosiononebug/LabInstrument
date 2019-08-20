<template>
    <div class="cy-sidebar">
        <div @click="strethSidebar()" class="streth-sidebar">
            <i class="icon-color icon-paragraph-justify3"></i>
        </div>
        <el-menu  
            class="el-menu-vertical-demo" 
            background-color="#263238"
            text-color="#f1f1f1"
            active-text-color="#FFFFFF"
            :router="true"
            :default-active="activeIndex"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item class="sidebar-user-box noBackground">
                <a  href="#">
                    <img class="sidebar-circle-round" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                </a>
                <div class="sidebar-user-info">
                    <p class="cancelMargin cancelPadding ml-2 sidebar-user-name">{{username}}</p>
                    <p class="cancelMargin text-muted sidebar-user-location"><i class="icon-pin font-size-sm"></i>安徽省 合肥市 蜀山区</p>
                </div>
                <a href="#" class="icon-color">
                    <i class="icon-cog3"></i>
                </a>
            </el-menu-item>
            <el-menu-item route="/home/index" index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">资源管理</span>
                </template>
                <el-menu-item-group>  
                    <el-submenu index="2-1">
                        <template slot="title">仪器</template>
                        <el-menu-item index="2-1-1">仪器详情</el-menu-item>
                    </el-submenu>
                    <el-menu-item route="/resource/type" index="2-2">仪器类型</el-menu-item>
                    <el-menu-item route="/resource/institution" index="2-3">机构</el-menu-item>
                    <el-menu-item index="2-4">用户</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">预约管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">机时预约</el-menu-item>
                    <el-menu-item index="3-2">样品预约</el-menu-item>
                    <el-menu-item index="3-3">我的预约</el-menu-item>
                    <el-menu-item index="3-4">我的陪同</el-menu-item>
                    <el-menu-item index="3-5">预约单</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">权限管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">用户级别</el-menu-item>
                    <el-menu-item index="4-2">角色</el-menu-item>
                    <el-menu-item index="4-3">角色组</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">耗材管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="5-1">领用申请</el-menu-item>
                    <el-menu-item index="5-2">我的领用</el-menu-item>
                    <el-menu-item index="5-3">发放</el-menu-item>
                    <el-menu-item index="5-4">名录</el-menu-item>
                    <el-menu-item index="5-5">类别设置</el-menu-item>
                    <el-menu-item index="5-6">库存</el-menu-item>
                    <el-menu-item index="5-7">领用单</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">培训管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="6-1">报名</el-menu-item>
                    <el-menu-item index="6-2">我的培训</el-menu-item>
                    <el-menu-item index="6-3">培训审批</el-menu-item>
                    <el-menu-item index="6-4">课程</el-menu-item>
                    <el-menu-item index="6-5">类型设置</el-menu-item>
                    <el-menu-item index="6-6">培训计划</el-menu-item>
                    <el-menu-item index="6-7">培训记录</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">个人中心</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="7-1">基本信息</el-menu-item>
                    <el-menu-item index="7-2">安全设置</el-menu-item>
                    <el-menu-item index="7-3">机构认证</el-menu-item>
                    <el-menu-item index="7-4">充值记录</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<style src="../../assets/css/components/CyHome/CySidebar.css"></style>

<script>
import store from 'store'
import axios from 'axios'

export default {
    name: 'CySidebar',
    data() {
        return {
            isCollapse: false,
            activeIndex: "1",
            username:'',
            menu: {}
        }
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        strethSidebar() {
            this.isCollapse = !this.isCollapse;
        }
    },
    mounted() {
        let name = store.get('username');
        this.username = name;
        axios.get('https://easy-mock.com/mock/5be8e391aebfd849286cd72c/labInstrument/getMenu').then((res) => {
          console.log(res.data.data);
            this.menu = res.data.data.menu;
            console.log(this.menu);
       }).catch( (error) => {
            console.log(error);
        });
    }
}
</script>