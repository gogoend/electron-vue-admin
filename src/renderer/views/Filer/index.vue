<template>
  <div>
      <h1>Filer</h1>
      <input v-model.lazy="currentPath" />
      <ul>
        <li v-for="item in fileList" :key="item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
const fs = require('fs')

const readdir = async function(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

export default {
  data() {
    return {
      currentPath: __dirname,
      fileList: []
    }
  },
  mounted() {
  },
  methods: {
  },
  watch: {
    currentPath: {
      immediate: true,
      handler: async function(nVal) {
        try {
          const fileList = await readdir(nVal)
          this.fileList = fileList
        } catch (err) {
          console.error(err)
          this.fileList = []
        }
      }
    }
  }
}
</script>

<style>

</style>