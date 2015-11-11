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

- [Sync](https://www.sync.com/download/win/sync-installer.exe)
- [Cmder](http://bliker.github.io/cmder/)
- [Cloudup](https://cloudup.com/download/win)
- [Lightscreen](https://github.com/ckaiser/Lightscreen/releases/download/v2.0/LightscreenSetup-2.0.exe)
- [Firefox nightly](http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-trunk/firefox-35.0a1.en-US.win32.installer.exe)
- [French Apple Keyboard Layout](https://github.com/kud/apple-french-keyboard-windows)
- [Apple Wireless Keyboard](http://uxsoft.cz/projects/apple-wireless-keyboard/)

## First time

```
$ npm install
```

## Usage

```
$ npm start
```

## Doc

⪧ [Index](doc/README.md)


