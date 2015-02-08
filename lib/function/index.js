
define(
[
	'./ECMA/index',
	'./isFunction',
	'./unbind',
	'./method',
	'./unhost'
]
, function (
	ecma,
	isFunction,
	unbind,
	method,
	unhost
) 
{

Function.prototype.unbind = unbind;
Function.prototype.method = method;
Function.prototype.unhost = unhost;

return {
	isFunction : isFunction
};

});

/**
* @namespace Sumi.Function
* @see {@link external:Function}
*/
