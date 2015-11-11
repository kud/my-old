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

## Firefox

Add this to `prefs.js` in the profile (`C:\Users\xxx\AppData\Roaming\Mozilla\Firefox\Profiles\xxx.default`) when firefox is off:

```
user_pref("general.warnOnAboutConfig", false);
user_pref("mousewheel.with_meta.action", 0);
user_pref("browser.startup.homepage", "https://raindrop.io/app#/dashboard");
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.useLocaleList", false);
user_pref("browser.toolbarbuttons.introduced.pocket-button", false);
user_pref("devtools.webide.widget.enabled", true);
user_pref("devtools.chrome.enabled ", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.command-button-responsive.enabled", false);
user_pref("devtools.command-button-splitconsole.enabled", false);
user_pref("devtools.command-button-eyedropper.enabled", true);
user_pref("devtools.toolbox.host", "side");
user_pref("services.sync.client.name", "_kud.home");
```
