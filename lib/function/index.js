
define(
[
	'./ECMA/index',
	'./isFunction',
	'./unbind',
	'./method',
	'./unhost',
	'./memoize'
]
, function (
	ecma,
	isFunction,
	unbind,
	method,
	unhost,
	memoize
) 
{'use strict';

return {
	isFunction : isFunction
};

});

/**
* @namespace Sumi.Function
* @see {@link external:Function}
*/
