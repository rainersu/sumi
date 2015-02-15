
define(
[
	'./ECMA/index',
	'./nbmpCharCodeAt',
	'./nbmpCharAt',
	'./toJSON',
	'./isString',
	'./dim',
	'./subReplace',
	'./reverse'
]
, function (
	ecma,
	nbmpCharCodeAt,
	nbmpCharAt,
	toJSON,
	isString,
	dim,
	subReplace,
	reverse
) 
{'use strict';

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