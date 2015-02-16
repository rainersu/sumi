
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


var match = Sumi.Pattern.CN_ID;

console.log(match.parse('44011119800315281X'));


return Sumi;

});

/**
* @namespace Sumi
*/
