var shell = require('shelljs')

var helper = {

  echoTitle: function( text ) {
    console.log('\n----------------------------')
    console.log('~  ' + text)
  },

  echoSuccess: function( text ) {
    console.log('☑  ' + text)
    console.log('----------------------------')
  },

  echoSpace: function() {
    console.log('\n')
  },

  install: function( app ) {
    shell.exec('choco install ' + app + ' -y')
    /*shell.exec('choco install ' + app + ' -y -f') // force*/
    shell.exec('choco upgrade ' + app + ' -y')
  }

}

module.exports = helper
