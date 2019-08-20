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
                    <div class="media popper-width border-bottom">
                        <p class="font-weight font-size-sm">更新</p>
                        <a href="#">
                            <i class="icon-sync text-muted"></i>
                        </a>
                    </div>
                    <div class="popper-width dropdown-scrollable">
                        <ul class="media-list">
                            <li class="media">
                                <div class="mr-3">
                                    <el-avatar class="icon-git-style" icon="icon-git-pull-request"></el-avatar>
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <span class="update-fontsize">Drop the IE specific hacks for temporal inputs</span>
                                    </div>
                                    <span class="text-muted">
                                        4 minutes ago
                                    </span>
                                </div>
                            </li>
                            <li class="media">
                                <div class="mr-3">
                                    <el-avatar class="icon-git-commit-style" icon="icon-git-commit"></el-avatar>
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <span class="update-fontsize">Add full font overrides for popovers and tooltips</span>
                                    </div>
                                    <span class="text-muted">
                                        36 minutes ago
                                    </span>
                                </div>
                            </li>
                            <li class="media">
                                <div class="mr-3">
                                    <el-avatar class="icon-git-merge-style" icon="icon-git-merge"></el-avatar>
                                </div>
                                <div class="media-body">
                                    <div class="media-title">
                                        <span class="update-fontsize">Eugene Kopyov merged Master and Dev branches</span>
                                    </div>
                                    <span class="text-muted">
                                        Dec 18, 18:36
                                    </span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="popper-width pt-2 pb-2 border-top">
                        <el-link class="text-muted" type="info" :underline="false">所有更新</el-link>
                        <div class="updated-icon-group">
                            <el-tooltip  class="item cancelPadding" effect="dark" content="Mark all as read" placement="top">
                                <el-dropdown-item class="more-info">
                                    <i class="icon-radio-unchecked "></i>
                                </el-dropdown-item>
                            </el-tooltip>
                            <el-tooltip  class="item cancelPadding" effect="dark" content="bug Tracker" placement="top">
                                <el-dropdown-item class="more-info">
                                    <i class="icon-bug2 "></i>
                                </el-dropdown-item>
                            </el-tooltip>
                        </div>
                    </div>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>
        <el-menu-item class="noBackground ">
            <el-tag class="loginTag" effect="dark" type="info">离线</el-tag>
        </el-menu-item>
        <el-menu-item class="float-right icon-cancelPadding mr-3 navbar-user-box">
            <el-dropdown>
                <div class="el-dropdown-link ">
                    <el-avatar class="ml-3" :size="34" ></el-avatar>
                    <span class="icon-color ml-3 navbar-user-name">未登录</span>
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
                        <a href="#">
                            <i class="icon-compose text-muted"></i>
                        </a>
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
                    <el-tooltip  class="item pb-1 border-top" effect="dark" content="查看更多信息" placement="top">
                        <el-dropdown-item class="text-center more-info">
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
                        <a href="#">
                            <i class="icon-search4 font-size-base text-muted"></i>
                        </a>
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
                    <div class="popper-width pt-2 pb-2 border-top">
                        <el-link class="text-muted" type="info" :underline="false">所有用户</el-link>
                        <a href="#">
                            <i class="el-icon-setting text-muted"></i>
                        </a>
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