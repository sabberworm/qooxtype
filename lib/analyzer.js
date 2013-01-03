// Writer

var writePackages = require('./write_packages');
var writeClass = require('./write_class');

//Exported Analyzer

function Analyzer(index) {
	this.index = index;
}

Analyzer.prototype.analyze = function(stream) {
	for(var fqn in this.index.classes) {
		var item = this.index.classes[fqn];
		writeClass(this.index, stream, item);
	}
	writePackages(this.index, stream);
};

module.exports = Analyzer;
