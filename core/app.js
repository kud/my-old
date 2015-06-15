var fs          = require('fs')
var shell       = require('shelljs')

var cloud       = 'd:\\Wuala\\low\\'
var homeAppData = process.env.userprofile + '\\'
var my          = 'd:\\my-unfortunately\\'

var helper      = require('./helper')

helper.echoTitle('Installing app...')

helper.install('nodejs.install')
helper.install('git.install')
helper.install('ccleaner')
helper.install('7zip.install')
helper.install('sumatrapdf.install')
helper.install('mactype')
helper.install('f.lux')
helper.install('launchy-beta')
helper.install('clamwin')
helper.install('keepass')
helper.install('pdfcreator')
helper.install('virtuawin')
// install('Clover')

// install('consolez')
helper.install('clink.install')
helper.install('sublimetext3')

helper.install('tweetdeck')
helper.install('deluge')
helper.install('btsync')
helper.install('spotify')
helper.install('filebot')
helper.install('vlc')

helper.install('steam')
helper.install('origin')
/*helper.install('battle.net')*/

helper.echoSuccess('App installed!')
