
define(
[
	'./ECMA/bind'
]
, function () 
{'use strict';

var F = Function.prototype,
	a = F.apply,
	c = F.call;

return Function.prototype.unhost = function (b) {
	return (b ? a : c).bind(this);
};

});

/**
* 使用当前函数体创建一个新函数，将原函数的上下文对象变量 this 解绑为由新函数的第一个参数手工指定。
* @see {@link external:Function#bind}
* @see {@link external:Function#unbind}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply}
* @access public
* @func external:Function.prototype.unhost
* @param {boolean} [apply=false]
* @param {boolean} apply.false - 使用 call  方法托管
* @param {boolean} apply.true  - 使用 apply 方法托管
* @returns {function} 创建出的新函数
* @example
* var slice = Array.prototype.slice.unhost();
* console.log(slice('123'));
* // [ '1', '2', '3' ]
* 
* var concat = Array.prototype.concat.unhost(false);
* console.log( concat([ 1 ], [ [ 2 ], [ 3, 8 ] ]) );
* // [ 1, [ 2 ], [ 3, 8 ] ]
* 
* var concat = Array.prototype.concat.unhost( true);
* console.log( concat([ 1 ], [ [ 2 ], [ 3, 8 ] ]) );
* // [ 1, 2, 3, 8 ]
*/

