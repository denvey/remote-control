<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  name: 'App',
})
</script>

<style lang="less">
/*每个页面公共css */
@import url("./static/iconfont/iconfont.less");
</style>
