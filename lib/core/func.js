
define(
[
	'../Function/isFunction',
	'../var/noop'
]
, function (
	isFunction,
	noop
) 
{'use strict';

return function (f) {
	return !f ? noop : isFunction(f) ? f : Function.apply(null, arguments);
};

});

/** 
* 检测参数值是否是函数，并尽量确保最终返回一个函数。
* @see {@link Sumi.arr}
* @access public
* @func Sumi.func
* @param {*} val - 如果参数是一个函数，则直接返回。否则将尝试对传入参数调用函数构造函数 
* @returns {function}
* @example
* var f = function(x) { return x + 1; };
* f = Sumi.func(f);
* console.log(f(1));          // 2
* 
* var f = Sumi.func('return 2');
* console.log(f( ));          // 2
* 
* var f = Sumi.func('x', 'return x + 1');
* console.log(f(1));          // 2
* 
* console.log(Sumi.func( ).toString());
* // function () {}
* 
* console.log(Sumi.func(8).toString());
* // function anonymous() { 8 }
*/
