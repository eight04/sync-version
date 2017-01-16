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
/\bversion["']?:\s*["']?([^\s'"]+)/
/^\/\/ @version\s+(\S+)/
```

and update it.

Changelog
---------
* 1.0.0 (Jan 17, 2016)
	- Change RegExp, shouldn't match "whatever_**version**".
	- Display package name on start.
	- Drop app-root-path. Find package.json along the ascension folders from cwd.
* 0.2.0 (Nov 7, 2016)
	- Support userscript style `// @version 0.1.0`.
* 0.1.1 (Apr 17, 2016)
	- Use app-root-path.
* 0.1.0 (Apr 16, 2016)
	- First release.
