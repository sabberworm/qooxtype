var fs = require('fs');
var path = require('path');

var Analyzer = require('./lib/analyzer');

if(process.argv.length < 3) {
	console.error('USAGE: node qx2ts /path/to/qooxdoo/app [generated-file-name.d.ts]');
	process.exit();
}

var paths = {app: process.argv[2], result: process.argv[3]};

if(!fs.existsSync(paths.app)) {
	console.error('Invalid path given, %s', paths.app);
	process.exit();
} else {
	paths.app = fs.realpathSync(paths.app);
}

paths.basename = path.basename(paths.app);

if(paths.basename === 'framework') {
	paths.basename = path.basename(path.dirname(paths.app));
}

if(!paths.result) {
	paths.result = paths.basename + '.d.ts';
}

paths.app = path.join(paths.app, 'api', 'script');

if(!fs.existsSync(paths.app)) {
	console.error('No generated API files found in: %s', paths.app);
	process.exit();
}

console.info('Generating %s for API in %s', paths.result, paths.app);

paths.result = path.resolve(paths.result);

fs.readdir(paths.app, function(error, files) {
	if(error) {
		console.error('Could not find API files: %s', error);
	}
	var output = fs.createWriteStream(paths.result);
	files.forEach(function(fileName) {
		if(path.extname(fileName) !== '.json') {
			console.log('Ignoring extraneous file %s', fileName);
			return;
		}
		var filePath = path.join(paths.app, fileName);
		var analyzer = new Analyzer(path.basename(filePath, '.json'), filePath);
		analyzer.analyze(output);
	});
	output.end();
});