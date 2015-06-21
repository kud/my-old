var shell = require('shelljs')
var h     = require('./helper')

var npmInstall = function( app ) {
  shell.exec('npm install -g ' + app)
}

h.echoTitle('Installing commands...')

npmInstall('imagemin')
npmInstall('npm-check-updates')
npmInstall('markdown-live')

h.echoSuccess('Commands installed!')
