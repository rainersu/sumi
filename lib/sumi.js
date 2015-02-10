
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs(
[
	'./json/json',
	'./memcache/memcache',
	'./core/index',
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
	'./hash/crypto'
]
, function (
	js,
	mc,
	c,
	e,
	r,
	d,
	f,
	a,
	o,
	b,
	s,
	n,
	m,
	esc,
	cyt
) 
{

var Sumi = 
	{
		JSON     : js,
		Memcache : mc,
		Core     : c,
		Error    : e,
		RegExp   : r,
		Date     : d,
		Function : f,
		Array    : a,
		Object   : o,
		Boolean  : b,
		String   : s,
		Number   : n,
		Math     : m,
		Escape   : esc,
		Crypto   : cyt
	};



	

return Sumi;

});

/**
* @namespace Sumi
*/
