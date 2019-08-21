<template>
  <div class="home">
    <cy-navbar></cy-navbar>
    <div class="page-content">
      <cy-sidebar></cy-sidebar>
      <cy-wrapper></cy-wrapper>
    </div>
  </div>
</template>


<style scoped>
.home {
  height: 100%;
}
.page-content {
  height: 100%;
  display: flex;
}
</style>

<script>
// 引入组件
import CyNavbar from '../../components/CyLogin/CyNavbar'
import CySidebar from '../../components/CyHome/CySidebar'
import CyWrapper from '../../components/CyHome/CyWrapper'
import store from 'store'
export default {
  name: 'CyHome',
  components: {
    CyNavbar,
    CySidebar,
    CyWrapper
  },
  destroyed () {
    store.clear();
  }
}
</script>
