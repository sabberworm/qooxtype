function normalizeType(type) {
	if(type.lastIndexOf(' object') > -1 && type.lastIndexOf(' object') === type.length - ' object'.length) {
		return type.substring(0, type.length - ' object'.length);
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
	if(type === 'DOMelement' || type === 'element' || type === 'DOMElement') {
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
	if(!type || type === 'Any' || type === 'Map' || type === 'map' || type === 'Object' || type === 'object' || type === 'varargs' || type === 'Arguments' || type === 'arguments' || type === 'Obj' || type === 'var' || type === 'Var' || type === 'Null' || type === 'null' || type.match(/\W/)) {
		return 'any';
	}
	return type;
}

module.exports = normalizeType;