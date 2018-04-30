var shell = require('shelljs')
var h     = require('./helper')

var npmInstall = function( app ) {
  shell.exec('npm install -g ' + app)
}

h.echoTitle('Installing commands...')

shell.exec('npm i -g npm')

npmInstall('imagemin-cli')
npmInstall('npm-check-updates')
npmInstall('markdown-live')
npmInstall('speed-test')
npmInstall('http-server')

h.echoSuccess('Commands installed!')
