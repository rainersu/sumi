
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs([
	'./var/lib',
	'./misc/each',
	
	'./esc/esc',
	'./crypto/crypto',
	'./uuid/uuid',
	'./json/json',
	
	'./number/number',
	'./string/string',
	'./object/object',
	'./regexp/regexp',
	'./function/function',
	'./array/array',
	'./date/date',
	'./math/math',
	'./error/error'
],
function (sumi, each) {




return sumi;

});
