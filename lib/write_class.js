var Index = require('./index');

var normalizeType = require('./normalize_type');

function extractChildren(item, typeFilter) {
	var result = [];
	item.children && item.children.forEach(function(child) {
		if(typeFilter && child.type !== typeFilter) {
			return;
		}
		result.push(child);
	});
	return result;
}

function uniquify(array) {
	var cache = {};
	for(var i=0;i<array.length;i++) {
		if(cache[array[i]]) {
			array.splice(i, 1);
			i--;
		} else {
			cache[array[i]] = true;
		}
	}
}

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
	
	function collectTypesFrom(items) {
		var collectedTypes = [];
		for(i=0;i<items.length;i++) {
			collectedTypes = collectedTypes.concat(collectTypes(items[i]));
		}
		if(collectedTypes.length === 0) {
			collectedTypes.push('void');
		}
		// Make set of types
		uniquify(collectedTypes);
		return collectedTypes;
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
		var params = extractChildren(method, 'params')[0];
		var returns = extractChildren(method, 'return');
		var returnTypes = [];
		if(method.attributes.isCtor) {
			returnTypes.push(item.intermediateName());
		} else {
			returnTypes = collectTypesFrom(returns);
		}


		if(returnTypes.length > 1) {
			var voidIndex = returnTypes.indexOf('void');
			if(voidIndex > -1) {
				returnTypes.splice(voidIndex, 1);
			}
		}

		var name = method.attributes.isCtor ? 'new' : method.attributes.name;
		
		function w(args) {
			stream.write('	' + name + '(');
			args = args.map(function(arg) {
				return ''+arg.name+': '+arg.type;
			});
			stream.write(args.join(', '));
			stream.write(')');
			stream.write(': ');
			stream.write(returnTypes[0]);
			stream.write(';\n');
		}
		
		function possiblePermutations(types, paramIndex) {
			var result = [];
			param = types[paramIndex];
			param.types.forEach(function(type, typeIndex) {
				if(paramIndex+1 == types.length) {
					result.push([typeIndex]);
				} else {
					possiblePermutations(types, paramIndex+1).forEach(function(res) {
						result.push([typeIndex].concat(res));
					});
				}
			});
			return result;
		}

		if(params) {
			params = extractChildren(params);
		} else {
			params = [];
		}
		if(params.length) {
			var paramTypes = [];
			params.forEach(function(p) {
				var types = collectTypes(p);
				uniquify(types);
				if(types.length === 0) {
					types.push('any');
				}
				paramTypes.push({name: p.attributes.name, types: types});
			});
			possiblePermutations(paramTypes, 0).forEach(function(permutation) {
				var args = [];
				paramTypes.forEach(function(param, permIndex) {
					var type = param.types[permutation[permIndex]];
					args.push({name: param.name, type: type});
				});
				w(args);
			});
		} else {
			w([]);
		}
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