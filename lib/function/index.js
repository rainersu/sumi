
define(
[
	'./isFunction',
	'./unbind',
	'./method'
]
, function (
	isFunction,
	unbind,
	method
) 
{

Function.prototype.unbind = unbind;
Function.prototype.method = method;

return {
	isFunction : isFunction
};

});

/**
* @namespace Sumi.Function
* @see {@link external:Function}
*/
