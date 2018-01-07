Set UAC = CreateObject("Shell.Application")
UAC.ShellExecute "D:\my-unfortunately\bin\btconfig.exe", "-d 0 -c 0", "", "runas", 1
WScript.Sleep 10000
UAC.ShellExecute "D:\my-unfortunately\bin\btconfig.exe", "-d 1 -c 1", "", "runas", 1
