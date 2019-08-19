<template>
    <div class="cy-wrapper">
        <div class="cy-wrapper-header">
            <el-row class="cy-wrapper-breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <div class="float-right">
                        <el-link class="text-muted ml-2 mr-2" :underline="false"> <i class="icon-comment-discussion mr-2"></i> 帮助</el-link>
                        <el-dropdown class="wrapper-setting ml-3">
                            <span class="el-dropdown-link text-muted">
                                <i class="icon-gear mr-2"></i> 
                                设置<i class="icon-arrow-down22"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item><i class="icon-user-lock mr-2"></i>账户安全</el-dropdown-item>
                                <el-dropdown-item><i class="icon-statistics mr-2"></i>分析</el-dropdown-item>
                                <el-dropdown-item><i class="icon-accessibility mr-2"></i>凭证</el-dropdown-item>
                                <el-dropdown-item divided><i class="icon-gear mr-2"></i>所有设置</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-breadcrumb>
            </el-row>
        </div>
        <div class="cy-wrapper-content">
            <router-view />
        </div>
    </div>
</template>

<style scoped src="../../assets/css/components/CyHome/CyWrapper.css"></style>

<script>
export default {
    name: 'CyWrapper',
    data() {
        return {

        }
    },
    methods: {
      goBack() {
        console.log('go back');
      }
    }
}
</script>