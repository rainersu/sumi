
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
	'./match/match',
	'./match/pattern',
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
	Pattern,
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
	Pattern  : Pattern,
	Escape   : Escape,
	Hash     : Hash,
	Sort     : Sort
});

//console.log(Sort.bubble([1, 2, 3, 2, 1]));

//console.log(Sumi.Array.reorder('bca'));   
// [ 'a', 'b', 'c' ]
	
//console.log(Sumi.Array.reorder([ 8, 3, -1, 'a', 0, '5.5' ]));     
// [ -1, 0, 3, 8, '5.5', 'a' ]



	
return Sumi;

});

/**
* @namespace Sumi
*/
