
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

Function.prototype.unbind  = unbind;
Function.prototype.method  = method;
Function.prototype.unhost  = unhost;
Function.prototype.memoize = memoize;

return {
	isFunction : isFunction
};

});

/**
* @namespace Sumi.Function
* @see {@link external:Function}
*/
