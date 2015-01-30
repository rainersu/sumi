
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs([
	'./var/lib',

	'./hash/crypto/crypto',
	'./hash/uuid/uuid',
	'./escape/escape',
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
function (sumi, uuid, crypto) {


console.log(Math.round10(155.55, 0));                // 55.6
	
return sumi;

});
