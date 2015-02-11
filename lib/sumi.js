
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs(
[	
	'./core/index',
	'./core/class',
	'./core/memcache',
	'./core/json',
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
	'./hash/index'
]
, function (
	Sumi,
	Class,
	Memcache,
	J,
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
	Hash
) 
{

Sumi.cp(Sumi, {
	Class    : Class,
	Memcache : Memcache,
	JSON     : J,
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
	Hash     : Hash
});

return Sumi;

});

/**
* @namespace Sumi
*/
