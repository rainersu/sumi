
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

//console.log(Sumi.Hash.md5('monkey') === 'd0763edaa9d9bd2a9516280e9044d885');
//console.log(Sumi.Hash.uuid3('ns:DNS', 'php.net') === '11a38b9a-b3da-360f-9353-a5a725514269');

return Sumi;

});

/**
* @namespace Sumi
*/
