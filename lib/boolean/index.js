
define(
[
	'./ECMA/index',
	'./toJSON',
	'./isBoolean'
]
, function (
	ecma,
	toJSON,
	isBoolean
) 
{

Boolean.prototype.toJSON = toJSON;

return {
	isBoolean: isBoolean
};

});

/**
* @namespace Sumi.Boolean
* @see {@link external:Boolean}
*/
