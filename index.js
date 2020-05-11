'use strict';

var supports = false;
try {
	// eslint-disable-next-line global-require
	supports = !!require('@ljharb/self-references');
} catch (e) {
}

module.exports = supports;
