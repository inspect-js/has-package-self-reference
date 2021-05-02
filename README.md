
# has-package-self-reference <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Does the current node version have support for requiring/importing its own name?

At the time of this writing, node v12.17+ and v13.7+ has support for [self-referencing a package‘s name to access its "exports"](https://nodejs.org/api/esm.html#esm_self_referencing_a_package_using_its_name).

This library exports `true` if the current node version supports it, `false` if it does not, and `null` if it's in a browser.

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-package-self-reference
[npm-version-svg]: http://versionbadg.es/inspect-js/has-package-self-reference.svg
[travis-svg]: https://travis-ci.org/inspect-js/has-package-self-reference.svg
[travis-url]: https://travis-ci.org/inspect-js/has-package-self-reference
[deps-svg]: https://david-dm.org/inspect-js/has-package-self-reference.svg
[deps-url]: https://david-dm.org/inspect-js/has-package-self-reference
[dev-deps-svg]: https://david-dm.org/inspect-js/has-package-self-reference/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-package-self-reference#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-package-self-reference.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/has-package-self-reference.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/has-package-self-reference.svg
[downloads-url]: http://npm-stat.com/charts.html?package=has-package-self-reference
