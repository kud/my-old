var shell = require('shelljs')

module.exports = {

  cloud: 'd:\\Wuala\\low\\',
  homeAppData: process.env.userprofile + '\\',
  my: 'd:\\my-unfortunately\\',

  echoTitle: function( text ) {
    console.log('~  ' + text)
  },

  echoSuccess: function( text ) {
    console.log('☑  ' + text)
  },

  echoFail: function( text ) {
    console.log('X  ' + text)
  },

  echoSpace: function() {
    console.log('\n')
  },


}
