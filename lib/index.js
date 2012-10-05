function IndexItem(data, mdFile) {
	this.data = data;
	this.fqn = data.attributes.fullName;
	this.package = this.fqn.split('.');
	this.name = this.package.pop();
}

function Index() {
	this.index = {};
	this.packages = {};
	this.typeIndex = {};
}

Index.prototype.addItem = function(mdFile) {
	var data = require(mdFile);
	var item = new IndexItem(data);
	
	var pkg = this.getPackage(item.package);
	
	pkg[item.name] = item;
	this.index[item.fqn] = item;
	if(!this.typeIndex[item.name]) {
		this.typeIndex[item.name] = [];
	}
	this.typeIndex[item.name].push(item);
};

Index.prototype.getPackage = function(package) {
	var pkg = this.packages;
	package.forEach(function(name, i) {
		if(pkg[name] instanceof IndexItem) {
			throw new Error('Package/Type conflict: %s', package.slice(0, i));
		}
		if(!pkg[name]) {
			pkg[name] = {};
		}
		pkg = pkg[name];
	});
	return pkg;
};

module.exports = Index;