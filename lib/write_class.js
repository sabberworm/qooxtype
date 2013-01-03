var Index = require('./index');

var normalizeType = require('./normalize_type');

extractChildren = function(item, typeFilter) {
	var result = [];
	item.children && item.children.forEach(function(child) {
		if(typeFilter && child.type !== typeFilter) {
			return;
		}
		result.push(child);
	});
	return result;
};


function write(index, stream, item) {
	function intermediateType(type) {
		type = normalizeType(type, item, index);
		if(type.indexOf('.') !== -1) {
			type = index.classes[type];
			if(!type) {
				type = 'any';
			} else {
				type = type.intermediateName();
			}
		}
		return type;
	}

	function superclass(type, isStatic) {
		if(isStatic) {
			return null;
		}
		if(!type) {
			return null;
		}
		type = intermediateType(type);
		if(type === 'any') {
			return null;
		}
		if(type.lastIndexOf('[]') === (type.length - '[]'.length)) {
			return 'Array';
		}
		return type;
	}

	function collectTypes(item) {
		var result = [];
		extractChildren(item, 'types').forEach(function(type) {
			extractChildren(type).forEach(function(type) {
				result.push(intermediateType(type.attributes.type));
			});
		});
		return result;
	}

	function writeMethod(method, isStatic) {
		var i;
		if(isStatic) {
			if(!method.attributes.isStatic && !method.attributes.isCtor) {
				return;
			}
		} else {
			if(method.attributes.isStatic) {
				return;
			}
		}
		var params = extractChildren(method, 'params');
		var returns = extractChildren(method, 'return');
		var returnTypes = [];
		if(method.attributes.isCtor) {
			returnTypes.push(item.intermediateName());
		} else {
			for(i=0;i<returns.length;i++) {
				returnTypes = returnTypes.concat(collectTypes(returns[i]));
			}
			if(returnTypes.length === 0) {
				returnTypes.push('void');
			}
		}
		// console.log(returnTypes);
		var name = method.attributes.isCtor ? 'new' : method.attributes.name + ' ';
		stream.write(name + '(');
		stream.write(')');
		stream.write(': ');
		// if(this.writeChildren('return', undefined, undefined, 1) === 0) {
			stream.write(returnTypes[0]);
		// }
		stream.write(';\n');
	}

	function writeMethods(methodList, isStatic) {
		extractChildren(methodList).forEach(function(method) {
			writeMethod(method, isStatic);
		});
	}

	function writeType(type) {
		stream.write(intermediateType(type));
	}

	var writer = {
		'methods-static': writeMethods,
		'methods': writeMethods,
		'constructor': writeMethods,
		'constants': function(item) {
			
		}
	};

	function writeClass(isStatic, types) {
		var parent = superclass(item.data.attributes.superClass);
		stream.write('interface ' + item.intermediateName(isStatic) + (parent && !isStatic ? ' extends ' + parent : '') + ' {\n');
		types.forEach(function(type) {
			extractChildren(item.data, type).forEach(function(child) {
				writer[type](child, isStatic);
			});
		});
		stream.write('}\n');
	}

	writeClass(true, ['methods-static', 'constants', 'constructor']);
	writeClass(false, ['methods']);
}

module.exports = write;