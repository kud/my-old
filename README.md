# My (for windows)

## Install

<img align="right" height="200" src="https://raw.githubusercontent.com/kud/my-unfortunately/master/everybodydancenow.gif">

### Chocolatey

First of all, install `chocolatey`:

- win
- type `cmd`
- press ctrl+shift+enter

There, insert:

```console
$ @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```

### Needed packages

Some of chocolatey packages must be installed first to make the main script work.

```console
$ choco install git.install nodejs.install
```

### Manual installation

- [Sync](https://www.sync.com/download/win/sync-installer.exe)
- [Cmder (forked)](https://github.com/Stanzilla/cmder)
- [Cloudup](https://cloudup.com/download/win)
- [Lightscreen](https://github.com/ckaiser/Lightscreen/releases)
- [Firefox Nightly](https://nightly.mozilla.org/)
- [French Apple Keyboard Layout](https://github.com/kud/apple-french-keyboard-windows)
- [Apple Wireless Keyboard](http://uxsoft.cz/projects/apple-wireless-keyboard/)

## First time

```console
$ npm install
```

## Usage

```console
$ £ bam
```

## [Doc](doc/README.md)


