
define(
[
	'./ECMA/index',
	'./toFixedWidth',
	'./toJSON',
	'./isNumber',
	'./isPrime',
	'./isOdd',
	'./isEven',
	'./isComposite'
]
, function (
	ecma,
	toFixedWidth,
	toJSON,
	isNumber,
	isPrime,
	isOdd,
	isEven,
	isComposite
) 
{

Number.prototype.toJSON = toJSON;

return {
	toFixedWidth : toFixedWidth,
	isNumber     : isNumber,
	isPrime      : isPrime,
	isOdd        : isOdd,
	isEven       : isEven,
	isComposite  : isComposite
};

});

/**
* @namespace Sumi.Number
* @see {@link external:Number}
*/
	