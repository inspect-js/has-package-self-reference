'use strict';

var test = require('tape');
var semver = require('semver');
// eslint-disable-next-line global-require
var spawnSync = typeof window === 'undefined' && require('child_process').spawnSync;

var hasPackageSelfReference = require('..');

test('has-package-self-reference', function (t) {
	var expected = typeof window === 'undefined' ? semver.satisfies(process.version, '>= 13.7 || =12.16.0 || ^12.17.0') : null;
	t.equal(hasPackageSelfReference, expected, 'module exports expected value: ' + expected);

	t.test('experimental warning', { skip: !spawnSync || process.env.RECURSION }, function (st) {
		st.plan(1);

		var res = spawnSync('node', ['test'], {
			env: { PATH: process.env.PATH, RECURSION: 'recursion' }
		});
		if (semver.satisfies(process.version, '~13.7 || ~13.8 || ~13.9 || =12.16.0')) {
			st.ok(String(res.stderr), 'stderr has an experimental warning in it');
		} else {
			st.equal(String(res.stderr), '', 'stderr is empty');
		}
	});

	t.end();
});
