
define(
[
	'./ECMA/index',
	'./isObject',
	'./isNumeric',
	'./isPlain',
	'./isEmpty',
	'./isArraylike',
	'./each',
	'./hasProtoProperty'	
]
, function (
	ecma,
	isObject,
	isNumeric,
	isPlain,
	isEmpty,
	isArraylike,
	each,
	hasProtoProperty
) 
{'use strict';

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
