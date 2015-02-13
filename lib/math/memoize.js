
define(function () {

return function (m, f) {
	return (function h(n) {
		var r = m[n];
		if (typeof r !== 'number') {
			r =  f(h, n);
			m[n] = r;
		}
		return r;
	});
};

});

/**
* 针对特定迭代计算创建一个具有记忆化（{@link http://en.wikipedia.org/wiki/Memoization Memoization}）功能的函数。
* @see {@link Sumi.memoize}
* @see {@link external:Function#memoize}
* @access public
* @func Sumi.Math.memoize
* @param {array} memCache - 用于缓存中间计算结果的数组
* @param {Sumi.Math~memoizeCallback}  formulaFunc  - 实现计算公式的函数
* @returns {function} 创建出的新函数
* @example
* var fibonacci = Sumi.Math.memoize([ 0, 1 ], function (recur, n) {
*     return recur(n - 1) + recur(n - 2);
* });
* 
* var a = [], i = -1;
* while (++i < 8) a.push(fibonacci(i));
* 
* console.log(a);
* // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
* @example
* var factorial = Sumi.Math.memoize([ 1, 1 ], function (recur, n) {
*     return n * recur(n - 1);
* });
* 
* var a = {}, i = -1;
* while (++i < 8) a[i] = factorial(i);
*   
* console.log(a);
* // { 0: 1, 1: 1, 2: 2, 3: 6, 4: 24, 5: 120, 6: 720, 7: 5040 }
* @example
* var summative = Sumi.Math.memoize([ 0, 1 ], function (recur, n) {
*     return n + recur(n - 1);
* });
* 
* var a = {}, i = -1;
* while (++i < 8) a[i] = summative(i);
* // { 0: 0, 1: 1, 2: 3, 3: 6, 4: 10, 5: 15, 6: 21, 7: 28 }
*/

/**
* @see {@link Sumi.Math.memoize}
* @callback Sumi.Math~memoizeCallback
* @param {function} recur - 对内部递归函数的引用
* @param {number}  num - 当前计算到的数字
* @returns {*} 计算结果
*/
