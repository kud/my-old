console.log('\n# Run baby, run!')

/**
 * Import
 */
var fs    = require('fs')
var shell = require('shelljs')

/**
 * Symlink
 */
console.log('\n\n## Symlinking files...')

var cloud = 'd:\\Wuala\\low\\'
var homeAppData = process.env.userprofile + '\\'
var my = 'd:\\my-unfortunately\\'


if ( !fs.existsSync(homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Installed Packages') ) {
  fs.symlinkSync(cloud + 'appdata\\sublimetext3\\Installed Packages', homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Installed Packages', 'dir')
}

if ( !fs.existsSync(homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Packages') ) {
  fs.symlinkSync(cloud + 'appdata\\sublimetext3\\Packages', homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Packages', 'dir')
}

if ( !fs.existsSync(homeAppData + '.gitconfig') ) {
  fs.symlinkSync(my + 'dotfiles\\.gitconfig', homeAppData + '.gitconfig')
}

console.log('\n## Symlinked!')

/**
 * Install apps
 */
console.log('\n\n## Installing apps...')

function install( app ) {
  shell.exec('choco install ' + app + ' -y')
  /*shell.exec('choco install ' + app + ' -y -f') // force*/
}

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
/*shell.exec('choco install Clover')*/

// shell.exec('choco install consolez')
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

console.log('\n## Installed!')

/**
 * Configure computer
 */
console.log('\n\n## Configure computer...')

var setItemProperty = 'set-itemproperty -path \\"HKCU:Control Panel\\Desktop\\" -name wallpaper -value \\"D:\\Wuala\\low\\lib\\wallpapers\\DefaultDesktop.jpg\\"'


shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "' + setItemProperty + '"')
shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters"') // Works itself but not via shell.exec :/

console.log('\n\n## Configured!')
