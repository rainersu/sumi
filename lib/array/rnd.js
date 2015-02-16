
define(
[
	'../math/rnd',
	'../string/isString'
]
, function (
	rnd,
	isString
) 
{'use strict';

return function (o, n, x) {
	o = Object(o);
	var l = o.length >>> 0,
		r = null;
	if (l) {
		x = rnd(x >>> 0 || l, n >>> 0);
		if (x in o) r = isString(o) ? o.charAt(x) : o[x];
	}
	return r;
};

});

/**
* 从数组中随机获取一个元素。如果数组为空，则返回 null 。
* @see {@link Sumi.Array.reorder}
* @see {@link Sumi.Array.shuffle}
* @see {@link Sumi.Math.rnd}
* @see {@link Sumi.Math.uuid}
* @access public
* @func Sumi.Array.rnd
* @param {object} arr - 数组、字符串或类数组对象
* @param {number} [min = 0] - 索引值范围下限（被包括）
* @param {number} [max = this.length] - 索引值范围上限（不包括）
* @returns {*} 获取到的随机元素 
* @example
* console.log(Sumi.Array.rnd());                                // undefined
* console.log(Sumi.Array.rnd([1]));                             // 1
* console.log(Sumi.Array.rnd('abc', 2));                        // c
* console.log(Sumi.Array.rnd(['a', 'b', 'c'], 2));              // c
* console.log(Sumi.Array.rnd({0: 'a', 1: 'b', length: 2}, 1));  // b
*/
