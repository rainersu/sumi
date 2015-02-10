
define(
[
	'../var/slice',
	'../core/json'
]
, function (
	S, 
	J
) 
{'use strict';
	
return Function.prototype.memoize = function() {
	var t = this,
		c = {},
		k,
		a,
		g = S(arguments);
	return function() {
		a = S(arguments);
		k = J.stringify(a);
		return (k in c) ? c[k] : c[k] = t.apply(this, g.concat(a));
	}
};

});	
	
/**
* 使用当前函数体创建一个具有记忆化（Memoization）功能的新函数。
* @access public
* @func external:Function.prototype.memoize
* @param {...*} [arg] - 需要被柯里化（Currying）封装给新函数的一个或多个参数
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
