
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs(
[	
	'./core/index',
	'./core/json',
	'./core/class',
	'./core/memcache',
	'./error/index',
	'./regexp/index',
	'./date/index',
	'./function/index',
	'./array/index',
	'./object/index',
	'./boolean/index',
	'./string/index',
	'./number/index',
	'./math/index',
	'./escape/index',
	'./hash/uuid'
]
, function (
	Sumi,
	J,
	Class,
	Memcache,
	E,
	R,
	D,
	F,
	A,
	O,
	B,
	S,
	N,
	M,
	Escape,
	UUID
) 
{

Sumi.cp(Sumi, {
	JSON     : J,
	Class    : Class,
	Memcache : Memcache,
	Error    : E,
	RegExp   : R,
	Date     : D,
	Function : F,
	Array    : A,
	Object   : O,
	Boolean  : B,
	String   : S,
	Number   : N,
	Math     : M,
	Escape   : Escape,
	UUID     : UUID
});






return Sumi;

});

/**
* @namespace Sumi
*/
