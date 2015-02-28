
define(
[
	'../var/slice',
	'../core/stringify',
	'../var/propIE'
]
, function (
	slice,
	stringify,
	propIE
) 
{'use strict';
	
return Function.prototype.memoize = function () {
	var t = this,
		c = {},
		g = slice.call(arguments);
	return function () {
		var a =  slice.call(arguments),
			k =  stringify(a, 1);
		return propIE.call(c, k) ? c[k] : c[k] = t.apply(this, g.concat(a));
	}
};

});	
	
/**
* 使用当前函数体创建一个具有记忆化（{@link http://en.wikipedia.org/wiki/Memoization Memoization}）功能的新函数。
* @see {@link Sumi.memoize}
* @see {@link Sumi.Math.memoize}
* @see {@link Sumi.stringify}
* @access public
* @func external:Function.prototype.memoize
* @param {...*} [arg] - 需要被柯里化（{@link http://en.wikipedia.org/wiki/Currying Currying}）封装给新函数的一个或多个参数
* @returns {function} 创建出的新函数
* @example
* Number.prototype.fix = Number.prototype.toFixed.memoize();
* console.log((2).fix(3));             // 2.000
* 
* Number.prototype.fix = (function(len) {
*     return this.toFixed(len);
* }).memoize();
* console.log((2).fix(5));             // 2.00000
* 
* var max = Math.max.memoize(3);
* console.log(max(6));                 // 6
* console.log(max(2));                 // 3
*/
