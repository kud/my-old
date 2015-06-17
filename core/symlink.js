var fs    = require('fs')
var shell = require('shelljs')
var h     = require('./helper')

function symLink( opts ) {
  if ( !fs.existsSync( opts.dest ) ) {
    fs.symlinkSync(opts.src, opts.dest, opts.type)
  }
}

h.echoTitle('Symlinking files...')

// startup
symLink({
  src: h.my + 'startup',
  dest: h.homeAppData + 'AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup',
  type: 'dir'
})

// sublime text
symLink({
  src: h.cloud + 'appdata\\sublimetext3\\Packages',
  dest: h.homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Packages',
  type: 'dir'
})

symLink({
  src: h.cloud + 'appdata\\sublimetext3\\Installed Packages',
  dest: h.homeAppData + 'AppData\\Roaming\\Sublime Text 3\\Installed Packages',
  type: 'dir'
})

// git
symLink({
  src: h.my + 'dotfiles\\.gitconfig',
  dest: h.homeAppData + '.gitconfig',
  type: 'file'
})

// vim
symLink({
  src: h.my + 'dotfiles\\.vimrc',
  dest: h.homeAppData + '.vimrc',
  type: 'file'
})

// virtua win
symLink({
  src: h.my + 'dotfiles\\virtuawin\\virtuawin.cfg',
  dest: h.homeAppData + 'AppData\\Roaming\\VirtuaWin\\virtuawin.cfg',
  type: 'file'
})

symLink({
  src: h.my + 'dotfiles\\virtuawin\\window.cfg',
  dest: h.homeAppData+ 'AppData\\Roaming\\VirtuaWin\\window.cfg',
  type: 'file'
})

h.echoSuccess('Files symlinked!')
