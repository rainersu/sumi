
define(
[
	'./bind'
]
, function (
	bind
) 
{'use strict';

Function.prototype.bind = bind;

});

/**
* @external Function
* @see {@link Sumi.Function}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/x844tc74(v=vs.94).aspx}
*/
