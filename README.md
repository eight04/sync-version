sync-version
============
A command line tool to sync version number with package.json.

Install
-------
```
npm install -D sync-version
```

Usage
-----
```
Usage:
  sync-version [--list] <files>...
  
Options:
  <files>    Sync version number with package.json inside <file>.
  -l --list  List current version.`,
```

Use it with package.json script:

```
"scripts": {
	"version": "sync-version bower.json && git add ."
}
```

How does it work?
-----------------

The script will try finding the version number with

```
/version["']?:\s*["']?([^\s'"]+)/
```

and update it.

Changelog
---------
* 0.1.0 (Apr 16, 2016)
	- First release

