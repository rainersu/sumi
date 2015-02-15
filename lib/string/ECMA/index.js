
define(
[
	'./fromCodePoint',
	'./codePointAt',
	'./endsWith',
	'./startsWith',
	'./trim',
	'./trimLeft',
	'./trimRight',
	'./repeat',
	'./substr'
]
, function (
	fromCodePoint,
	codePointAt,
	endsWith,
	startsWith,
	trim,
	trimLeft,
	trimRight,
	repeat,
	substr
) 
{'use strict';

String.fromCodePoint = fromCodePoint;
String.prototype.codePointAt = codePointAt; 
String.prototype.endsWith = endsWith;
String.prototype.startsWith = startsWith;
String.prototype.trim = trim;
String.prototype.trimLeft = trimLeft;
String.prototype.trimRight = trimRight;
String.prototype.repeat = repeat;
String.prototype.substr = substr;
	
});

/**
* @external String
* @see {@link Sumi.String}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/ecczf11c(v=vs.94).aspx}
*/
	