<template>
  <div>
      <h1>Filer</h1>
      <input v-model.lazy="currentPath" />
      <ul>
        <li v-for="item in fileList" :key="item.name">
          <a
            @click="currentPath = path.join( currentPath, item.name)"
            v-if="item.isFolder"
          >
            {{item.name}}
          </a>
          <a
            @click="shell.openPath(path.join( currentPath, item.name));"
            v-else
          >
            {{item.name}}
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
const fs = require('fs')
const path = require('path')
const shell = require('electron').shell

const readdir = async function(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, {
      withFileTypes: true
    }, (err, files) => {
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
      currentPath: path.resolve(__dirname),
      fileList: [],
      path,
      fs,
      shell
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
          fileList.forEach(item => {
            item.isFolder = item.isDirectory()
          })
          fileList.unshift(...[{
            name: '..',
            isFolder: true
          }])
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