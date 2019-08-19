<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#324148"
    text-color="#FFFFFF"
    border-bottom-color= "rgba(255,255,255,.1)"
    active-text-color="#ffd04b">
        <el-menu-item class="logo-setting noBackground">
            CodeManLab
        </el-menu-item>
        <el-menu-item class="icon-cancelPadding">
            <el-dropdown>
                <div class="el-dropdown-link">
                    <i class="icon-git-compare navbar-iconSize icon-color"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-main>
                        <el-row :gutter="20">
                            <el-col :span="6">11111111111111</el-col>
                            <el-col :span="6" :offset="6">11111111111111</el-col>
                        </el-row>
                    </el-main>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
        <el-menu-item class="noBackground">
            <el-tag effect="dark" type="info">离线</el-tag>
        </el-menu-item>
        <el-menu-item class="float-right icon-cancelPadding mr-3">
            <el-dropdown>
                <div class="el-dropdown-link">
                    <el-avatar class="ml-2" :size="34" ></el-avatar>
                    <span class="icon-color ml-2">未登录</span>
                    <i class="icon-arrow-down22 pr-2 ml-2 icon-color"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <i class="el-icon-user-solid"></i>
                        我的账户
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="el-icon-message-solid"></i>
                        我的消息
                    </el-dropdown-item>
                    <el-dropdown-item></el-dropdown-item>
                    <el-dropdown-item divided>
                        <i class="el-icon-s-tools"></i>
                        个人设置
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="el-icon-switch-button"></i>
                        退出
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
        <el-menu-item class="float-right icon-cancelPadding">
            <el-dropdown>
                <div class="el-dropdown-link">
                    <i class="icon-bubbles4 navbar-iconSize icon-color"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <div class="media popper-width border-bottom">
                        <p class="font-weight font-size-sm">消息通知</p>
                    </div>
                    <div class="popper-width dropdown-scrollable">
                        <ul class="media-list">
                            <li class="media">
                                <div class="mr-3">
                                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold boot-primary">刘总</span>
                                            <span class="text-muted font-size-sm float-right">16:46</span>
                                        </a>
                                    </div>
                                    <span class="text-muted">
                                        who knows, maybe that would be the best thing for me...
                                    </span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <el-tooltip class="item border-top more-info" effect="dark" content="查看更多信息" placement="top">
                        <el-dropdown-item class="text-center">
                            <i class="el-icon-more"></i>
                        </el-dropdown-item>
                    </el-tooltip>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
        <el-menu-item class="float-right icon-cancelPadding">
            <el-dropdown>
                <div class="el-dropdown-link">
                    <i class="icon-people navbar-iconSize icon-color"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <div class="media popper-width border-bottom">
                        <p class="font-weight font-size-sm">在线用户</p>
                    </div>
                    <div class="popper-width dropdown-scrollable">
                        <ul class="media-list">
                            <li class="media">
                                <div class="mr-3">
                                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold boot-primary">刘总</span>
                                        </a>
                                    </div>
                                    <span class="text-muted">
                                        老板
                                    </span>
                                </div>
                                <div class="ml-3 align-self-center">
                                    <div class="online"></div>
                                </div>
                            </li>
                            <li class="media">
                                <div class="mr-3">
                                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <a href="#">
                                            <span class="font-weight-semibold boot-primary">朱总</span>
                                        </a>
                                    </div>
                                    <span class="text-muted">
                                       老板
                                    </span>
                                </div>
                                <div class="ml-3 align-self-center">
                                    <div class="outline"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="popper-width pt-3 border-top more-info clearfix">
                        <el-link class="text-muted" :underline="false">所有用户</el-link>
                        <el-link class="text-muted float-right" :underline="false">
                            <i class="el-icon-setting"></i>
                        </el-link>
                    </div>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
    </el-menu>
</template>

<style scoped src="../../assets/css/components/CyLogin/CyNavbar.css"></style>
<script>
export default {
    name: 'CyNavbar',
    data() {
        return {
            activeIndex:'1'
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>