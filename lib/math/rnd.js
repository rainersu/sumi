
define(
[
	'../number/index'
]
, function () 
{'use strict';

var s = Number.MAX_SAFE_INTEGER;

return function (x, n, i) {
	var l = arguments.length;
	x = l ? +x : s;
	n = l > 1  ? +n : 0;
	x = n + Math.random() * (x - n);
	return (l < 3 || !!i) ? Math.min(Math.floor(x), s) : x;
};

});

/**
* 生成一个大于或等于 min 并小于 max 的随机数。
* @see {@link Sumi.Array.rnd}
* @see {@link Sumi.Math.uuid}
* @access public
* @func Sumi.Math.rnd
* @param {number}  [max=Number.MAX_SAFE_INTEGER] - 范围上限（不包括）
* @param {number}  [min=0] - 范围下限（被包括）
* @param {boolean} [int=true] - 是否需要整数
* @returns {number} 
* @example
* console.log(Sumi.Math.rnd());             // 2279663728590847
* console.log(Sumi.Math.rnd(1));            // 0
* console.log(Sumi.Math.rnd(2, 1));         // 1
* console.log(Sumi.Math.rnd(2, 1, false));  // 1.143790360307321
*/
