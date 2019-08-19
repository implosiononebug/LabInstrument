<template>
    <el-container class="fullScreen">
        <el-header  class="header BackgroundHeader">
            <cy-navbar></cy-navbar>
        </el-header>
        <div class="container">
            <div class="content">
                <cy-content class="cy-content"></cy-content>
            </div>
            <div class="footer">
                <cy-footer></cy-footer>
            </div>
        </div>
    </el-container>
</template>

<style scoped>
    .fullScreen {
        height: 100%;
    }
    .BackgroundHeader {
        background: #324148;
    }
    .container {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .header {
        height: 50px !important;
        line-height: 50px !important;
    }
    .content {
        flex-grow: 3;
    }
    .cy-content {
        flex-grow: 1
    }
    .footer {
        border-top:1px solid;
        border-top-color: rgba(0,0,0,.125);
        height:50px;
    }
</style>

<script>
import CyNavbar from '../components/CyLogin/CyNavbar'
import CyContent from '../components/CyLogin/CyContent'
import CyFooter from '../components/CyLogin/CyFooter'
import axios from 'axios'
import store from 'store'

export default {
    name: 'CyLogin',
    components: {
        CyNavbar,
        CyContent,
        CyFooter
    },
    data() {
        return {

        }
    },
    created() {
          
    }
}
</script>