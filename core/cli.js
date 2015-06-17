var shell = require('shelljs')
var h     = require('./helper')

npmInstall: function( app ) {
  shell.exec('npm install -g ' + app)
}

h.echoTitle('Installing commands...')

npmInstall('imagemin')
npmInstall('npm-check-updates')

h.echoSuccess('Commands installed!')
