Set UAC = CreateObject("Shell.Application")
UAC.ShellExecute "D:\my-unfortunately\bin\btconfig.exe", "-d 1 -c 1", "", "runas", 1
