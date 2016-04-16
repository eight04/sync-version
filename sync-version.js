#!/usr/bin/env node

var doc = `sync-version

Usage:
  sync-version [--list] <files>...
  
Options:
  <files>    Sync version number with package.json inside <file>.
  -l --list  List current version.`,

	fs = require("fs"),
	docopt = require("docopt"),
	pkg = require("app-root-path").require("./package.json"),
	
	args = docopt.docopt(doc, {version: "0.1.1"}),
	
	versionRE = /version["']?:\s*["']?([^\s'"]+)/;
	
if (!pkg.version) {
	throw "cannot find version property in package.json";
}
	
console.log("package.json\t" + pkg.version);

var i, files = args["<files>"];
for (i = 0; i < files.length; i++) {
	if (args["--list"]) {	
		logVersion(files[i]);
	} else {
		syncVersion(files[i]);
	}
}

function logVersion(file) {
	fs.readFile(file, "utf8", function(err, data){
		if (err) {
			throw err;
		}
		var match = data.match(versionRE);
		if (!match) {
			throw "cannot find version property in " + file;
		}
		console.log(file + "\t" + match[1]);
	});
}

function syncVersion(file) {
	fs.readFile(file, "utf8", function(err, data) {
		if (err) {
			throw err;
		}
		var match = versionRE.exec(data);
		if (!match) {
			throw "cannot find version property in " + file;
		}
		if (match[1] == pkg.version) {
			console.log(file + "\t" + match[1] + " --> " + pkg.version + " no change");
			return;
		}
		data = data.substring(0, match.index + match[0].length - match[1].length) + pkg.version + data.substring(match.index + match[0].length);
		fs.writeFile(file, data, "utf8", function (err) {
			if (err) {
				throw err;
			}
			console.log(file + "\t" + match[1] + " --> " + pkg.version);
		});
	});
}
