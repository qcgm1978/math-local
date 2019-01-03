var fs = require('fs')
	, path = require('path')
	, _ = require('underscore');

var rootPath = "/path/to/remove";
// removeDirForce(rootPath);

// path should have trailing slash
exports.removeDirForce = dirPath => {
	fs.readdir(dirPath, function (err, files) {
		if (err) {
			console.log(JSON.stringify(err));
		} else {
			if (files.length === 0) {
				fs.rmdir(dirPath, function (err) {
					if (err) {
						console.log(JSON.stringify(err));
					} else {
						var parentPath = path.normalize(dirPath + '/..') + '/';
						if (parentPath != path.normalize(rootPath)) {
							removeDirForce(parentPath);
						}
					}
				});
			} else {
				_.each(files, function (file) {
					var filePath = `${dirPath}${dirPath.endsWith('/') ? '' : '/'}${file}`
					fs.stat(filePath, function (err, stats) {
						if (err) {
							console.log(JSON.stringify(err));
						} else {
							if (stats.isFile()) {
								fs.unlink(filePath, function (err) {
									if (err) {
										console.log(JSON.stringify(err));
									}
								});
							}

							if (stats.isDirectory()) {
								removeDirForce(filePath + '/');
							}
						}
					});
				});
			}
		}
	});
}