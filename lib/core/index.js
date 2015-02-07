
define(
[
	'./type',
	'./cp',
	'./eq',
	'./ns',
	'./func',
	'./arr'
]
, function (
	type,
	cp,
	eq,
	ns,
	func,
	arr
) 
{

return {
	type : type,
	cp   : cp,
	eq   : eq,
	ns   : ns,
	func : func,
	arr  : arr
};

});

/**
* @namespace Sumi.Core
*/
