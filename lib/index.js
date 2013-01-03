function IndexItem(pkg) {
	this.pkg = pkg;
	this.name = this.pkg.pop() || '';
}

IndexItem.prototype.intermediateName = function(isStatic) {
	var result = '';
	if(this.pkg.length) {
		result = this.pkg.join('_')+'_';
	}
	return result+this.name+(isStatic ? 'Static' : '');
};

function Package(pkg) {
	IndexItem.call(this, pkg);
	this.contents = {};
}

Package.prototype = Object.create(IndexItem.prototype);

function RootPackage() {
	Package.call(this, []);
}

RootPackage.prototype = Object.create(Package.prototype);

function Class(data) {
	this.fqn = data.attributes.fullName;
	IndexItem.call(this, this.fqn.split('.'));
	this.data = data;
}

Class.prototype = Object.create(IndexItem.prototype);

function Index() {
	this.classes = {};
	this.packages = new RootPackage();
	this.typeIndex = {};
}

Index.Item = IndexItem;
Index.Package = Package;
Index.RootPackage = RootPackage;
Index.Class = Class;

Index.prototype.addClass = function(mdFile) {
	var data = require(mdFile);
	var item = new Class(data);
	
	var pkg = this.getPackage(item.pkg);
	
	pkg.contents[item.name] = item;
	this.classes[item.fqn] = item;
	if(!this.typeIndex[item.name]) {
		this.typeIndex[item.name] = [];
	}
	this.typeIndex[item.name].push(item);
};

Index.prototype.getPackage = function(pkg) {
	var pkgs = this.packages;
	pkg.forEach(function(name, i) {
		if(pkgs.contents[name] instanceof Class) {
			throw new Error('Package/Type conflict: %s', pkg.slice(0, i+1));
		}
		if(!pkgs.contents[name]) {
			pkgs.contents[name] = new Package(pkg.slice(0, i+1));
		}
		pkgs = pkgs.contents[name];
	});
	return pkgs;
};

module.exports = Index;