
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
	'./hash/index'
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
	Hash
) 
{

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
	Hash     : Hash
});




var match = Sumi.Pattern.CN_TELEPHONE;

console.log(match.parse('TEL: (+86)21 5568-3122, (86-21) 55683122'));
// [ {
//     number: '55683122', 
//     zone: '21', 
//     match: '(+86)21 5568-3122'
// },{	
//     number: '55683122', 
//     zone: '21', 
//     match: '(86-21) 55683122' 
// } ]

console.log(match.is('+86 21 55683122'));     // true
console.log(match.is('(+86)21 5568-3122'));   // true
console.log(match.is('(86-21) 55683122'));    // true
console.log(match.is('(021)55683122'));       // true
console.log(match.is('021 55683122'));        // true

console.log(match.is('(+98)21 5568-3122'));   // false
console.log(match.is('021 556831'));          // false





return Sumi;

});

/**
* @namespace Sumi
*/
