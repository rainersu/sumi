
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

// http://zh.wikipedia.org/wiki/Base64

console.log(Sumi.Escape.encodeBase64('foo © bar 𝌆 baz'));
// Zm9vIMKpIGJhciDwnYyGIGJheg==

console.log(Sumi.Escape.decodeBase64('Zm9vIMKpIGJhciDwnYyGIGJheg=='));
// foo © bar 𝌆 baz

console.log(Sumi.Escape.encodeBase64('dankogai'));
// ZGFua29nYWk=

console.log(Sumi.Escape.decodeBase64('ZGFua29nYWk='));
// dankogai


console.log(Sumi.Escape.encodeBase64('小飼弾'));   
// 5bCP6aO85by+

console.log(Sumi.Escape.decodeBase64('5bCP6aO85by+'));   
// 小飼弾

console.log(Sumi.Escape.encodeBase64URI('小飼弾'));
// 5bCP6aO85by-

console.log(Sumi.Escape.decodeBase64URI('5bCP6aO85by-'));
// 小飼弾



return Sumi;

});

/**
* @namespace Sumi
*/
