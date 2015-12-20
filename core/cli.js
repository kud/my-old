var shell = require('shelljs')
var h     = require('./helper')

var npmInstall = function( app ) {
  shell.exec('npm install -g ' + app)
}

h.echoTitle('Installing commands...')

shell.exec('npm install -g')

npmInstall('imagemin')
npmInstall('npm-check-updates')
npmInstall('markdown-live')
npmInstall('speed-test')
npmInstall('gulp')

h.echoSuccess('Commands installed!')
