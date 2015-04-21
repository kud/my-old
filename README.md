# My (for windows)

## Install

<img align="right" height="200" src="https://raw.githubusercontent.com/kud/my-unfortunately/master/everybodydancenow.gif">

### Chocolatey

First of all, install `chocolatey`:

- win
- type `cmd`
- press ctrl+shift+enter

There, insert:

```
$ @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```

### Needed packages

Some of chocolatey packages must be installed first to make the main script work.

```
$ choco install git.install nodejs.install
```

## Manual installation

- [Wuala](https://cdn.wuala.com/files/WualaSetup.exe)
- [Cmder](http://bliker.github.io/cmder/)
- [Lightscreen](https://github.com/ckaiser/Lightscreen/releases/download/v2.0/LightscreenSetup-2.0.exe)
- [Firefox nightly](http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-trunk/firefox-35.0a1.en-US.win32.installer.exe)
- [Launchy theme "pix_"](http://twnsnd.deviantart.com/art/pix-for-launchy-292839328)

## First time

```
$ npm install
```


## Usage

```
$ npm start
```


