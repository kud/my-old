Set UAC = CreateObject("Shell.Application")
UAC.ShellExecute "D:\my-unfortunately\bin\btconfig.exe", "-d 0 -c 0", "", "runas", 1
