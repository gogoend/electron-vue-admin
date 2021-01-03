<template>
  <div id="app">
    <title-bar class="title-bar" />
    <router-view class="main-content"></router-view>
    <section class="status-bar">状态栏</section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
export default {
  name: 'App',
  components: {
    TitleBar
  }
}
</script>
<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式

  html, body, #app{
    height: 100%;
    background-color: transparent;
  }
  #app{
    display: flex;
    overflow: hidden;
    flex-direction: column;
    background-color: #fff;
    .title-bar, .status-bar {
      display: flex;
      flex: 0 0 24px;
      align-items: center;
    }
    .main-content {
      flex: 1
    }
  }
</style>
