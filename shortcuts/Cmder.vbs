Set UAC = CreateObject("Shell.Application")
UAC.ShellExecute "C:\Applications\cmder\Cmder.exe", "", "", "runas", 1
