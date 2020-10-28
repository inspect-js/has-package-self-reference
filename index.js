'use strict';

var supports = false;
try {
	require.resolve('has-package-self-reference');
	supports = true;
} catch (e) {
}

module.exports = supports;
