
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs([
	'./var/lib','./misc/proto',
	'./misc/zip',
	'./class/class',
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
function (sumi, proto) {



return sumi;

});
