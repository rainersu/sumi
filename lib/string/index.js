
define(
[
	'./nbmpCharCodeAt',
	'./nbmpCharAt',
	'./toJSON',
	'./isString',
	'./dim',
	'./subReplace',
	'./reverse',
	'./ECMA/index'
]
, function (
	nbmpCharCodeAt,
	nbmpCharAt,
	toJSON,
	isString,
	dim,
	subReplace,
	reverse
) 
{

String.prototype.toJSON = toJSON;

return {
	isString      : isString,
	dim           : dim,
	subReplace    : subReplace,
	reverse       : reverse,
	nbmpCharAt    : nbmpCharAt,
	nbmpCharCodeAt: nbmpCharCodeAt
};

});

/**
* @namespace Sumi.String
* @see {@link external:String}
*/