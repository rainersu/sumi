
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
{'use strict';

Boolean.prototype.toJSON = toJSON;

return {
	isBoolean: isBoolean
};

});

/**
* @namespace Sumi.Boolean
* @see {@link external:Boolean}
*/
