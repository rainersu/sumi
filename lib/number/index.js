
define(
[
	'./toFixedWidth',
	'./toJSON',
	'./isNumber',
	'./isPrime',
	'./isOdd',
	'./isEven',
	'./isComposite',
	'./ECMA/index'
]
, function (
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
	