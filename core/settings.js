var shell = require('shelljs')
var h     = require('./helper')

h.echoTitle('Setting computer...')

var setItemProperty = 'set-itemproperty -path \\"HKCU:Control Panel\\Desktop\\" -name wallpaper -value \\"D:\\Sync\\low\\lib\\wallpaper.jpg\\"'

shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "' + setItemProperty + '"')
shell.exec('@powershell -NoProfile -ExecutionPolicy unrestricted -Command "RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters"') // Works itself but not via shell.exec :/

h.echoSuccess('Computer set!')
