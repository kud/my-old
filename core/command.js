var shell = require('shelljs')
var h     = require('./helper')

var argv = require('yargs')
  .usage('Usage: £ <command> [options]')
  .command('bam', 'Install/update everything on the computer', function() {
    require('./rocknroll')
  })
  .command('edit', 'Edit the project', function(){
    shell.exec('subl .')
  })
  .help('h')
  .alias('h', 'help')
  .argv
