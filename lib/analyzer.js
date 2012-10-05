// Writer

var Writer = require('./writer');

//Exported Analyzer

function Analyzer(index) {
	this.index = index;
}

Analyzer.prototype.analyze = function(stream) {
	for(fqn in this.index.index) {
		var item = this.index.index[fqn];
		var writer = new Writer(item.data, item, this.index, stream);
		writer.write();
	}
};

module.exports = Analyzer;
