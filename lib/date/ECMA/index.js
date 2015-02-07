
define(
[
	'./now',
	'./parse',
	'./toISOString',
	'./toJSON'
]
, function (
	now,
	parse,
	toISOString,
	toJSON
) 
{

Date.now = now;
Date.parse = parse;
Date.prototype.toISOString = toISOString;
Date.prototype.toJSON = toJSON;

});

/**
* @external Date
* @see {@link Sumi.Date}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/cd9w2te4%28v=vs.94%29.aspx}
*/