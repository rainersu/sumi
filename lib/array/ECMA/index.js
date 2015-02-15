
define(
[
	'./isArray',
	'./from',
	'./of',
	'./forEach',
	'./some',
	'./every',
	'./includes',
	'./find',
	'./findIndex',
	'./indexOf',
	'./lastIndexOf',
	'./reduce',
	'./reduceRight',
	'./map',
	'./filter',
	'./copyWithin',
	'./fill'
]
, function (
	isArray,
	from,
	of,
	forEach,
	some,
	every,
	includes,
	find,
	findIndex,
	indexOf,
	lastIndexOf,
	reduce,
	reduceRight,
	map,
	filter,
	copyWithin,
	fill
) 
{'use strict';

Array.isArray = isArray;
Array.from = from;
Array.of = of;
Array.prototype.forEach = forEach;
Array.prototype.some = some;
Array.prototype.every = every;
Array.prototype.includes = includes;
Array.prototype.contains = includes;
Array.prototype.find = find;
Array.prototype.findIndex = findIndex;
Array.prototype.indexOf = indexOf;
Array.prototype.lastIndexOf = lastIndexOf;
Array.prototype.reduce = reduce;
Array.prototype.reduceRight = reduceRight;
Array.prototype.map = map;
Array.prototype.filter = filter;
Array.prototype.copyWithin = copyWithin;
Array.prototype.fill = fill;

});

/**
* @external Array
* @see {@link Sumi.Array}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/k4h76zbx%28v=vs.94%29.aspx}
*/
