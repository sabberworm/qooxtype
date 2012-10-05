function normalizeAccess(access) {
	if(!access || access === 'protected') {
		return '';
	}
	if(access === 'internal') {
		access = 'private';
	}
	return access + ' ';
}

module.exports = normalizeAccess;