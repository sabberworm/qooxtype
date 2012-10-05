function typeApplicable(item) {
	if(item.data.attributes.isStatic) {
		return false;
	}
	return true;
}

function normalizeType(type, rootItem, index) {
	if(type.lastIndexOf(' object') > -1 && type.lastIndexOf(' object') === type.length - ' object'.length) {
		return type.substring(0, type.length - ' object'.length);
	}
	// Some types end with a multitude of dots to indicate varargs
	type = type.replace(/\.{2,}/g, '');
	if(type === 'Clazz') {
		return 'qx.Class';
	}
	if(type === 'win') {
		return 'Window';
	}
	if(type === 'IframeElement' || type === 'Iframe') {
		return 'HTMLIFrameElement';
	}
	if(type === 'xhr' || type === 'Xhr') {
		return 'XMLHttpRequest';
	}
	if(type === 'Array') {
		return 'any[]';
	}
	if(type === 'DOMelement' || type === 'element' || type === 'DOMElement' || type === 'Element') {
		return 'Element';
	}
	if(type === 'node' || type === 'DomNode') {
		return 'Node'
	}
	if(type === 'String') {
		return 'string';
	}
	if(type === 'function') {
		return 'Function';
	}
	if(type === 'Number' || type === 'Float' || type === 'Integer' || type === 'PositiveInteger' || type === 'PositiveNumber' || type === 'zIndex') {
		return 'number';
	}
	if(type === 'Regexp') {
		return "RegExp";
	}
	if(type === 'Boolean' || type === 'boolean' || type === 'true' || type === 'false') {
		return 'bool';
	}
	if(!type || type === "Stub" || type === 'Any' || type === 'Map' || type === 'map' || type === 'Object' || type === 'object' || type === 'varargs' || type === 'Arguments' || type === 'arguments' || type === 'Obj' || type === 'var' || type === 'Var' || type === 'Null' || type === 'null' || type.match(/[^\w._$]/)) {
		return 'any';
	}
	if(type.indexOf('.') === -1 && rootItem && index) {
		// Get the package of the type that this type is relative to and absolutize it
		var pkg = index.getPackage(rootItem.package);
		if(pkg[type] && typeApplicable(pkg[type])) {
			return pkg[type].fqn;
		}
		// Find all types of the given name and pick the best match
		if(index.typeIndex[type]) {
			var result = null;
			index.typeIndex[type].forEach(function(item) {
				if(!typeApplicable(item)) {
					return;
				}
				// If the found type is in a subpackage of the qualifying type, give priority to previous matches
				if(!result || item.fqn.indexOf(rootItem.package.join('.')) === 0) {
					result = item;
				}
			});
			if(result) {
				return result.fqn;
			}
		}
	}
	return type;
}

module.exports = normalizeType;