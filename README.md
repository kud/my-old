# My (for windows)

## Install

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

- Wuala
- Cloudup
- Lightscreen
- Firefox nightly
- Launchy theme "pix_"

## Usage

```
$ npm start
```


