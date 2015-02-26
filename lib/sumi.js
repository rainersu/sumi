
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
	'./sort/sort',
	'./sort/algorithm'
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
	sort,
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
	sort     : sort,
	Sort     : Sort
});


console.log(Sumi.sort([ 8, 3, 8, 0, -3 ], null, null, 'cycle'));
// [ -3, 0, 3, 8, 8 ]

console.log(Sumi.sort([ { x: 3 }, { x: 1 }, { x: 2 }, { x: 1 }, { x: 3 } ], ['x'], null, 'cycle'));
// [ { x: 1 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 3 } ]


return Sumi;

});

/**
* @namespace Sumi
*/
