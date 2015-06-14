var fs          = require('fs')
var shell       = require('shelljs')

var cloud       = 'd:\\Wuala\\low\\'
var homeAppData = process.env.userprofile + '\\'
var my          = 'd:\\my-unfortunately\\'

var helper      = require('./helper')

helper.echoTitle('Setting computer...')

var setItemProperty = 'set-itemproperty -path \\"HKCU:Control Panel\\Desktop\\" -name wallpaper -value \\"D:\\Wuala\\low\\lib\\wallpapers\\DefaultDesktop.jpg\\"'

shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "' + setItemProperty + '"')
shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters"') // Works itself but not via shell.exec :/

helper.echoSuccess('Computer set!')
