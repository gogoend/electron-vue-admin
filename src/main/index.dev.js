/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

let path = require('path')
const { session } = require('electron')

// Set environment for development
process.env.NODE_ENV = 'development'

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  // 在 npm install vue-devtools --save-dev 后，手动加载vue-devtools
  const devToolPath = path.join(`../../node_modules/vue-devtools/vender`)
  session.defaultSession.loadExtension(path.resolve(__dirname, devToolPath))
  // BrowserWindow.addDevToolsExtension
})

// Require `main` process to boot app
require('./index')
