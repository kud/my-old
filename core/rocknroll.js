console.log('####################')
console.log('#                  #')
console.log('#  Run baby, run!  #')
console.log('#                  #')
console.log('####################')

/**
 * Import
 */
var fs          = require('fs')
var shell       = require('shelljs')

var cloud       = 'd:\\Wuala\\low\\'
var homeAppData = process.env.userprofile + '\\'
var my          = 'd:\\my-unfortunately\\'

/**
 * Helpers
 */
function echoTitle( text ) {
  console.log('\n----------------------------')
  console.log('~  ' + text)
}

function echoSuccess( text ) {
  console.log('☑  ' + text)
  console.log('----------------------------')
}

function echoSpace() {
  console.log('\n')
}

function install( app ) {
  shell.exec('choco install ' + app + ' -y')
  /*shell.exec('choco install ' + app + ' -y -f') // force*/
  shell.exec('choco upgrade ' + app + ' -y')
}

/**
 * Symlink
 */
echoTitle('Symlinking files...')

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

// virtua win
if ( !fs.existsSync(homeAppData + 'AppData\\Roaming\\VirtuaWin\\virtuawin.cfg') ) {
  fs.symlinkSync(my + 'dotfiles\\virtuawin.cfg', homeAppData + 'AppData\\Roaming\\VirtuaWin\\virtuawin.cfg')
}

if ( !fs.existsSync(homeAppData+ 'AppData\\Roaming\\VirtuaWin\\window.cfg') ) {
  fs.symlinkSync(my + 'dotfiles\\window.cfg', homeAppData + 'AppData\\Roaming\\VirtuaWin\\window.cfg')
}


echoSuccess('Files symlinked!')

/**
 * Install apps
 */
echoTitle('Installing app...')

install('nodejs.install')
install('git.install')
install('ccleaner')
install('7zip.install')
install('sumatrapdf.install')
install('mactype')
install('f.lux')
install('launchy-beta')
install('clamwin')
install('keepass')
install('pdfcreator')
install('virtuawin')
// install('Clover')

// install('consolez')
install('clink.install')
install('sublimetext3')

install('tweetdeck')
install('deluge')
install('btsync')
install('spotify')
install('filebot')
install('vlc')

install('steam')
install('origin')
install('battle.net')

echoSuccess('App installed!')

/**
 * Configure computer
 */
echoTitle('Configure computer...')

var setItemProperty = 'set-itemproperty -path \\"HKCU:Control Panel\\Desktop\\" -name wallpaper -value \\"D:\\Wuala\\low\\lib\\wallpapers\\DefaultDesktop.jpg\\"'


shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "' + setItemProperty + '"')
shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters"') // Works itself but not via shell.exec :/

echoSuccess('Computer configured!')
