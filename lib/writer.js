// Utility belt

var normalizeType = require('./normalize_type');
var normalizeAccess = require('./normalize_access');

// Writer

function Writer(data, item, index, stream, level) {
	this.data = data;
	this.item = item;
	this.index = index;
	this.stream = stream;
	this.level = level || 0;
	this.currentInterface = null;
	this.namespaces = [];
}

// Line writer

Writer.prototype.line = function(message) {
	this.beginLine(message);
	this.endLine();
};

Writer.prototype.beginLine = function(message) {
	if(this.level) {
		this.stream.write((new Array(this.level+1)).join('\t'));
	}
	if(message) {
		this.stream.write(message);
	}
};

Writer.prototype.endLine = function(message) {
	if(message) {
		this.stream.write(message);
	}
	this.stream.write('\n');
};

// Write methods

var CONTAINERS = ['methods', 'methods-static', 'constants', 'constructor'];

Writer.prototype.write = function() {
	if(this.data.type === 'desc') {
		return;
	}
	if(CONTAINERS.indexOf(this.data.type) > -1) {
		this.writeChildren(null, null, 0);
	} else {
		if(this.data.type === 'class') {
			this.writeClass();
		} else if(this.data.type === 'interface') {
			// Something else
		} else if(this.data.type === 'method') {
			this.writeMethod();
		} else if(this.data.type === 'param') {
			this.writeParam();
		} else if(this.data.type === 'params') {
			this.writeChildren('param', ', ');
		} else if(this.data.type === 'return') {
			if(this.writeChildren('types', undefined, undefined, 1) === 0) {
				this.stream.write('void');
			}
		} else if(this.data.type === 'types') {
			this.writeType();
		} else if(this.data.type === 'constant') {
			this.writeConstant();
		} else if(this.data.type === 'deprecated' || this.data.type === 'childControls' || this.data.type === 'properties' || this.data.type === 'see' || this.data.type === 'events' || this.data.type === 'superInterfaces') {
			//Ignore
		} else {
			console.warn("Unknown type: %s", this.data.type, this.data.attributes);
		}
	};
	
	this.closeInterface();
	this.closeNamespaces();
};

Writer.prototype.writeClass = function() {
	this.declareNamespace(this.data.attributes.packageName);
	this.declareInterface(this.data.attributes.name, 'class', this.data.attributes.superClass !== 'Object' && this.data.attributes.superClass);
	this.writeChildren(null, null, 0);
};

Writer.prototype.writeChildren = function(typeFilter, separator, level, limit) {
	if(!this.data.children) {
		return 0;
	}
	if(level === undefined) {
		level = 1;
	}
	var count = 0;
	var _this = this;
	this.data.children.forEach(function(child) {
		if(typeFilter && child.type !== typeFilter) {
			return;
		}
		if(limit !== undefined && limit <= count) {
			return;
		}
		if(separator && count > 0) {
			_this.stream.write(separator);
		}
		var writer = new Writer(child, _this.item, _this.index, _this.stream, _this.level+level);
		writer.write();
		count++;
	});
	return count;
};

Writer.prototype.writeMethod = function() {
	this.beginLine();
	this.stream.write(normalizeAccess(this.data.attributes.access));
	if(this.data.attributes.isStatic) {
		this.stream.write('static ');
	}
	var name = this.data.attributes.isCtor ? 'constructor' : this.data.attributes.name;
	this.stream.write(name + '(');
	this.writeChildren('params');
	this.stream.write(')');
	if(!this.data.attributes.isCtor) {
		this.stream.write(': ');
		if(this.writeChildren('return', undefined, undefined, 1) === 0) {
			this.stream.write('void');
		}
	}
	this.endLine(';');
};

Writer.prototype.writeParam = function() {
	this.stream.write(this.data.attributes.name);
	this.stream.write(': ');
	if(this.writeChildren('types', undefined, undefined, 1) === 0) {
		this.stream.write('any');
	}
	// Apparently, “Arguments in signatures may not have default values”
	// if(this.data.attributes.defaultValue) {
	// 	this.stream.write(' = ' + this.data.attributes.defaultValue);
	// }
};

Writer.prototype.writeConstant = function() {
	this.beginLine();
	this.stream.write(normalizeAccess(this.data.attributes.access));
	this.stream.write('static ' + this.data.attributes.name);
	if(this.data.attributes.type) {
		this.stream.write(': ' + this.normalizeType(this.data.attributes.type));
	}
	// Apparently, “context does not permit variable initializer”
	// if(this.data.attributes.value) {
	// 	this.stream.write(' = ' + this.data.attributes.value);
	// }
	this.endLine(';');
};

//FIXME: Only the first type is used, overloads are not currently supported
Writer.prototype.writeType = function() {
	var type = this.normalizeType(this.data.children[0].attributes.type);
	this.stream.write(type);
};

Writer.prototype.declareInterface = function(name, type, superclass) {
	type = type || 'interface';
	this.closeInterface();
	if(superclass) {
		superclass = this.normalizeType(superclass);
		if(superclass === 'any' || superclass === 'any[]' || superclass === 'Error') {
			//Error is an interface
			superclass = null;
		}
	}
	// Ignore inheritance for now
	superclass = null;
	this.line('export ' + type + ' ' + name + (superclass ? ' extends ' + superclass + ' ' : '') + ' {');
	this.level++;
	this.currentInterface = name;
};

Writer.prototype.closeInterface = function() {
	if(this.currentInterface) {
		this.level--;
		this.line('}');
	}
	this.currentInterface = null;
};

Writer.prototype.declareNamespace = function(name) {
	if(name) {
		this.line('module ' + name + ' {');
		this.level++;
		this.namespaces.push(name);
	}
}

Writer.prototype.closeNamespaces = function() {
	while(this.namespaces.length) {
		this.level--;
		this.line('}');
		this.namespaces.pop();
	}
};

// Utility methods

Writer.prototype.normalizeType = function(type) {
	return normalizeType(type, this.item, this.index);
};

module.exports = Writer;