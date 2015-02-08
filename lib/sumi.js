
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
	'./math/index'
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
	m
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
		Math     : m
	};




return Sumi;

});

/**
* @namespace Sumi
*/
