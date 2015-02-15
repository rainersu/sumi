
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs(
[	
	'./core/index',
	'./core/class',
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
	'./match/index',
	'./escape/index',
	'./hash/index',
	'./sort/index'
]
, function (
	Sumi,
	Class,
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
	Match,
	Escape,
	Hash,
	Sort
) 
{'use strict';

Sumi.cp(Sumi, {
	Class    : Class,
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
	Match    : Match,
	Pattern  : Match.Pattern,
	Escape   : Escape,
	Hash     : Hash,
	Sort     : Sort
});




var match = Sumi.Pattern.CN_TELEPHONE;

console.log(Sumi.num());                    // 0
console.log(Sumi.num(0x32));                // 50


return Sumi;

});

/**
* @namespace Sumi
*/
