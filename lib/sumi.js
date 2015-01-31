
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs([
	'./var/lib',
	'./class/class',
	'./misc/klass',
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
function (sumi, Class, klass) {

var X = klass({
	init : function (a, b) {
		this.c = a + b;
	}
});
var Y = klass(X, {
	init : function (b) {
		this._super(30, b);
	}
});
console.log(new Y(3).c);

return sumi;

});
