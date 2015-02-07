
define(
[
	'./create',
	'./assign',
	'./getPrototypeOf',
	'./is',
	'./keys'
]
, function (
	create,
	assign,
	getPrototypeOf,
	is,
	keys
) 
{

Object.create = create;
Object.assign = assign;
Object.getPrototypeOf = getPrototypeOf;
Object.is = is;
Object.keys = keys;

});

/**
* @external Object
* @see {@link Sumi.Object}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/kb6te8d3(v=vs.94).aspx}
*/
	