<template>
  <div class="title-bar">
      <section class="bar-section">
          <ul class="file-menu">
              <li>文件</li>
              <li>文件</li>
              <li>文件</li>
              <li>文件</li>
              <li>文件</li>
          </ul>
      </section>
      <section class="bar-section">FFShell</section>
      <section class="bar-section">
          <el-button type="danger" @click="handleQuit">×</el-button>
      </section>
  </div>
</template>

<script>
export default {
  methods: {
    handleQuit() {
      window.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.title-bar{
    width: 100%;
    display: flex;
    justify-content: space-between;
    user-select: none;
    .bar-section {
        height: 100%;
        display: flex;
        align-items: center;
    }
    ul.file-menu {
        display: flex;
        padding: 0;
        margin: 0;
        height: 100%;
        li {
            display: flex;
            align-items: center;
            height: 100%;
            list-style: none;
            padding: 0 0.5em;
        }
    }
}
</style>