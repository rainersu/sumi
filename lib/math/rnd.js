
define([
	'../number/MAX_SAFE_INTEGER',
	'../var/undefined'
], function (X, U) {
	
return Math.rnd = function (max, min, int) {
	var x = max === U ? X : +max,
		n = min === U ? 0 : +min,
		i = !(int - 1),
		M = Math,
		r = n + M.random() * (x - n);
	return  i ? M.min(M.floor(r), X) : r;
};

});

/**
* 生成一个大于或等于 min 并小于 max 的随机数。
* @see {@link external:Array#rnd}
* @access public
* @func external:Math.rnd
* @param {number}  [max=Number.MAX_SAFE_INTEGER] - 范围上限（不包括）
* @param {number}  [min=0] - 范围下限（被包括）
* @param {boolean} [int=true] - 是否需要整数
* @returns {number} 
* @example
* console.log(Math.rnd());
* console.log(Math.rnd(10));
* console.log(Math.rnd(10, 1));
* console.log(Math.rnd(10, 1, false));
*/
