function typeApplicable(item) {
	// Static classes can not be valid types
	// if(item.data.attributes.isStatic) {
	// 	return false;
	// }
	return true;
}

function normalizeType(type, rootItem, index) {
	if(type.lastIndexOf(' object') > -1 && type.lastIndexOf(' object') === type.length - ' object'.length) {
		return type.substring(0, type.length - ' object'.length);
	}
	// Some types end with a multitude of dots to indicate varargs
	type = type.replace(/\.{2,}/g, '');
	if(type === 'Clazz' || type === 'Class') {
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
	if(type === 'document') {
		return 'Document';
	}
	if(type === 'DOMelement' || type === 'element' || type === 'DOMElement' || type === 'Element') {
		return 'Element';
	}
	if(type === 'node' || type === 'DomNode') {
		return 'Node';
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
	if(type === 'Boolean' || type === 'boolean' || type === 'true' || type === 'false' || type === 'Boolen') {
		return 'bool';
	}
	if(!type || type === "Stub" || type === 'Any' || type === 'Map' || type === 'map' || type === 'Object' || type === 'object' || type === 'varargs' || type === 'Arguments' || type === 'arguments' || type === 'Obj' || type === 'var' || type === 'Var' || type === 'Null' || type === 'null' || type.match(/[^\w._$]/)) {
		return 'any';
	}
	// If we don’t have a fully-qualified type, try to get the fqn
	if(index && (!index.classes[type] || type.indexOf('.') === -1)) {
		var pkgs = type.split('.');
		var name = pkgs.pop();
		// Get the package of the type that this type is relative to and absolutize it
		if(rootItem) {
			var pkg = index.getPackage(rootItem.pkg);
			for(var i=0;i<pkgs.length;i++) {
				pkg = pkg.contents[pkgs[i]];
				if(!pkg) {
					break;
				}
			}
			if(pkg && pkg.contents[name] && typeApplicable(pkg.contents[name])) {
				return pkg.contents[name].fqn;
			}
		}
		// Find all types of the given name and pick the best match
		if(index.typeIndex[name]) {
			var result = null;
			index.typeIndex[name].forEach(function(item) {
				// Exlude non-applicable types
				if(!typeApplicable(item)) {
					return;
				}
				// Exclude types where only the class name but not its package matches
				if(item.fqn.lastIndexOf(type) !== (item.fqn.length - type.length)) {
					return;
				}
				// If the found type is in a subpackage of the qualifying type, give priority over previous matches
				if(!result || item.fqn.indexOf(rootItem.pkg.join('.')) === 0) {
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