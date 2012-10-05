// Writer

var Writer = require('./writer');

//Exported Analyzer

function Analyzer(name, path) {
	this.name = name;
	if(this.name === 'apiindex' || this.name === 'apidata') {
		return;
	}
	this.path = path;
}

Analyzer.prototype.analyze = function(stream) {
	if(!this.path) {
		return;
	}
	var writer = new Writer(require(this.path), stream);
	writer.write();
};

module.exports = Analyzer;
