
define(
[
	'./EPSILON',
	'./MAX_SAFE_INTEGER',
	'./MIN_SAFE_INTEGER',
	'./isNaN',
	'./isFinite',
	'./isInteger',
	'./isSafeInteger'
]
, function (
	EPSILON,
	MAX_SAFE_INTEGER,
	MIN_SAFE_INTEGER,
	isNaN,
	isFinite,
	isInteger,
	isSafeInteger
) 
{'use strict';

Number.EPSILON = Number.EPSILON || EPSILON;
Number.MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || MIN_SAFE_INTEGER;
Number.isNaN = Number.isNaN || isNaN;
Number.isFinite = Number.isFinite || isFinite;
Number.isInteger = Number.isInteger || isInteger;
Number.isSafeInteger = Number.isSafeInteger || isSafeInteger;

});

/**
* @external Number
* @see {@link Sumi.Number}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/dwab3ed2(v=vs.94).aspx}
*/	
