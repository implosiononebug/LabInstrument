<template>
    <div class="cy-sidebar">
        <div @click="strethSidebar()" class="streth-sidebar">
            <i class="icon-color icon-paragraph-justify3"></i>
        </div>
        <el-menu  
            class="el-menu-vertical-demo" 
            background-color="#263238"
            text-color="#FFFFFF"
            active-text-color="#ffd04b"
            :router="true"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item class="sidebar-user-box noBackground">
                <a class="sidebar-user-link" href="#">
                    <img class="sidebar-circle-round" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                </a>
                <div class="sidebar-user-info">
                    <p class="cancelMargin cancelPadding ml-2 sidebar-user-name">未登录</p>
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
                    <el-menu-item route="/resource/system" index="2-1">系统</el-menu-item>
                    <el-menu-item route="/resource/function" index="2-2">功能</el-menu-item>
                    <el-menu-item index="2-3">用户组</el-menu-item>
                    <el-menu-item index="2-4">用户</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">权限管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">角色</el-menu-item>
                    <el-menu-item index="3-2">角色组</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">运营管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">通知</el-menu-item>
                    <el-menu-item index="4-2">消费</el-menu-item>
                    <el-menu-item index="4-3">日志</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">配置管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="5-1">功能类型</el-menu-item>
                    <el-menu-item index="5-2">短信</el-menu-item>
                    <el-menu-item index="5-3">邮件</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<style scoped src="../../assets/css/components/CyHome/CySidebar.css"></style>

<script>
export default {
    name: 'CySidebar',
    data() {
        return {
            isCollapse: false
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
    }
}
</script>