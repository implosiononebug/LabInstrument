<template>
    <el-menu
    class="el-menu-demo CyFooter noBorder clearfix"
    mode="horizontal"
    background-color="#fff"
    text-color="#999">
        <el-menu-item class="logo-setting">
            <div>
                 © 2015 - 2018.<a class="elem-primary" href="#">XXXX</a> by <a class="elem-primary" href="#">诚益信息科技</a> 
            </div>       
        </el-menu-item>
        <el-menu-item class="icon-footer-box float-right icon-cancelPadding icon-setting">
            <div class="el-dropdown-link icon-setPadding ">
                <i class="icon-lifebuoy"></i>
                <span class="support-text">Support</span>
            </div>
        </el-menu-item>
    </el-menu>
</template>

<style scoped src="../../assets/css/components/CyLogin/CyFooter.css"></style>
<style scoped src="../../assets/css/components/CyLogin/CyNavbar.css"></style>
<script>
export default {
    name: 'CyFooter'
}
</script>