var fs          = require('fs')
var shell       = require('shelljs')

var cloud        = 'd:\\Wuala\\low\\'
var homeAppData  = process.env.userprofile + '\\'
var my           = 'd:\\my-unfortunately\\'

var helper      = require('./helper')

helper.echoTitle('Symlinking files...')

// startup
if ( !fs.existsSync(homeAppData + 'AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup') ) {
  fs.symlinkSync(my + 'startup', homeAppData + 'AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup', 'dir')
}

// sublime text
if ( !fs.existsSync(homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Installed Packages') ) {
  fs.symlinkSync(cloud + 'appdata\\sublimetext3\\Installed Packages', homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Installed Packages', 'dir')
}

if ( !fs.existsSync(homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Packages') ) {
  fs.symlinkSync(cloud + 'appdata\\sublimetext3\\Packages', homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Packages', 'dir')
}

// git
if ( !fs.existsSync(homeAppData + '.gitconfig') ) {
  fs.symlinkSync(my + 'dotfiles\\.gitconfig', homeAppData + '.gitconfig')
}

// vim
if ( !fs.existsSync(homeAppData + '.vimrc') ) {
  fs.symlinkSync(my + 'dotfiles\\.vimrc', homeAppData + '.vimrc')
}

// cmder
/*if ( !fs.existsSync('c:\\Appplications\\cmder\\config\\aliases') ) {
  fs.symlinkSync(my + 'dotfiles\\cmder\\aliases', 'c:\\Appplications\\cmder\\config\\aliases')
}*/

// virtua win
if ( !fs.existsSync(homeAppData + 'AppData\\Roaming\\VirtuaWin\\virtuawin.cfg') ) {
  fs.symlinkSync(my + 'dotfiles\\virtuawin\\virtuawin.cfg', homeAppData + 'AppData\\Roaming\\VirtuaWin\\virtuawin.cfg')
}

if ( !fs.existsSync(homeAppData+ 'AppData\\Roaming\\VirtuaWin\\window.cfg') ) {
  fs.symlinkSync(my + 'dotfiles\\virtuawin\\window.cfg', homeAppData + 'AppData\\Roaming\\VirtuaWin\\window.cfg')
}

helper.echoSuccess('Files symlinked!')
