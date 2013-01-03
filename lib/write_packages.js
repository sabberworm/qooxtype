var Index = require('./index');

function write(index, stream) {
	var writePackage = function writePackage(pkg) {
		var d, item;
		for(d in pkg.contents) {
			item = pkg.contents[d];
			if(item instanceof Index.Package) {
				writePackage(item);
			}
		}

		stream.write('interface '+pkg.intermediateName(true)+' {\n');
		for(d in pkg.contents) {
			item = pkg.contents[d];
			if(item instanceof Index.Package) {
				stream.write('	'+d+': '+item.intermediateName(true)+';\n');
			} else {
				stream.write('	'+d+': '+item.intermediateName(true)+';\n');
			}
		}
		stream.write('}\n');
	};

	for(var d in index.packages.contents) {
		item = index.packages.contents[d];
		if(item instanceof Index.Package) {
			writePackage(item);
		}
		if(item instanceof Index.Package) {
			stream.write('declare var '+d+': '+item.intermediateName(true)+';\n');
		} else {
			stream.write('declare var '+d+': '+item.intermediateName(true)+';\n');
		}
	}
}

module.exports = write;