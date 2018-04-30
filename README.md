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

## First time

```console
$ npm install
```

## Usage

```console
$ £ bam
```

## [Doc](doc/README.md)


