
define(
[
	'../var/slice',
	'./stringify',
	'../var/propIE'
]
, function (
	slice,
	stringify,
	propIE
) 
{'use strict';
	
return function (t, m) {
	var c = {};
	return function () {
		var a =  slice.call(arguments),
			k =  stringify(a, m);
		return propIE.call(c, k) ? c[k] : c[k] = t.apply(t, a);
	}
};

});	
	
/**
* 使用指定函数创建一个具有记忆化（{@link http://en.wikipedia.org/wiki/Memoization Memoization}）功能的新函数。
* @see {@link external:Function#memoize}
* @see {@link Sumi.Math.memoize}
* @see {@link Sumi.stringify}
* @access public
* @func Sumi.memoize
* @param {function} [func] - 原始函数
* @param {number} [mode=0] - 以何种方式将参数编码为用于缓存索引的键值。参见 {@link Sumi.stringify Sumi.stringify}
* @param {number}  mode.0  - 使用 Javascript 的自动类型转换，相当于 String(val)
* @param {number}  mode.1  - 使用 JSON.stringify
* @param {number}  mode.2  - 尽可能保留一切数据，譬如函数和正则表达式
* @returns {function} 创建出的新函数
* @example
* var add = Sumi.memoize(function (a, b) {
*     console.log('Cached!');
*     return a + b;
* });
* 
* add(2, 5);    // Cached!
* add(2, 5); 
*/
