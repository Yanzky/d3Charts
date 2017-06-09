<template>
  <div id="app">
    <!--此处的router-link可以省略，直接在地址输入路径也可以访问子页面-->
    <!--<router-link to="/base">点击我进入base页面</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  body {
    font-family: "Helvetica Neue", Helvetica,Arial, "Microsoft YaHei", "微软雅黑", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    background: transparent;
  }
  #line .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999999;
    background: rgba(6, 19, 28, 1);
    padding-top: 20%;
    color: red;
    text-align: center;
  }
</style>
