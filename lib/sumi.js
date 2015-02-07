
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs(
[
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
	'./json/json'
]
, function (
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
	j
) 
{

var Sumi = 
	{
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
		JSON     : j
	};









return Sumi;

});

/**
* @namespace Sumi
*/
