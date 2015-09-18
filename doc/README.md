# Index

## PATH

Add `my-unfortunately/bin` in PATH.

## SSH

Start `start-ssh-agent` not to have passphrase to enter anymore. Also uncommit in cmder folder `@call "%CMDER_ROOT%/bin/agent.cmd"`.

## Disable recovery mode

```
bcdedit /set {current} recoveryenabled No
bcdedit /set {current} bootstatuspolicy ignoreallfailures
```

## Exec which must be ignored by MacType because of crash

```
[ExcludeSub]
GameOverlayUI.exe
GTAVLauncher.exe
insurgency.exe
powershell.exe
rundll32.exe
shattered_horizon.exe
shimgen.exe
Steam.exe
steamwebhelper.exe
subl.exe
```

## Launchy

- Add to catalog:

```
D:/my-unfortunately/shortcuts
```

- Theme: [Launchy theme "pix_"](http://twnsnd.deviantart.com/art/pix-for-launchy-292839328)

## Useful but not used apps

- [Cloudup](https://cloudup.com/download/win)