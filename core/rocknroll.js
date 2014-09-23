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

shell.exec('choco install ccleaner')
shell.exec('choco install 7zip.install')
shell.exec('choco install sumatrapdf.install')
shell.exec('choco install mactype')
shell.exec('choco install f.lux')
shell.exec('choco install launchy-beta')
shell.exec('choco install clamwin')
shell.exec('choco install keepass')
shell.exec('choco install pdfcreator')
shell.exec('choco install virtuawin')

shell.exec('choco install SublimeText3')

shell.exec('choco install tweetdeck')
shell.exec('choco install deluge')
shell.exec('choco install btsync')
shell.exec('choco install spotify')
shell.exec('choco install filebot')
shell.exec('choco install vlc')

shell.exec('choco install steam')
shell.exec('choco install origin')
shell.exec('choco install battle.net')

console.log('\n## Installed!')

