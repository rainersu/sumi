
define(
[
	'./isObject',
	'./isNumeric',
	'./isPlain',
	'./isEmpty',
	'./isArraylike',
	'./each',
	'./hasProtoProperty',
	'./ECMA/index'	
]
, function (
	isObject,
	isNumeric,
	isPlain,
	isEmpty,
	isArraylike,
	each,
	hasProtoProperty
) 
{

return {
	isObject         : isObject,
	isNumeric        : isNumeric,
	isPlain          : isPlain,
	isEmpty          : isEmpty,
	isArraylike      : isArraylike,
	each             : each,
	hasProtoProperty : hasProtoProperty
};

});

/**
* @namespace Sumi.Object
* @see {@link external:Object}
*/
