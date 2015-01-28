
define(function () {
	
return Math.rnd = function(min, max, int) {
	var r = Math.random() * (max - min);
	return (!(int - 1) ? Math.floor(r) : r) + min;
};

});

/**
* 生成一个大于或等于 min 并小于 max 的随机数。
* @see {@link external:Array#rnd}
* @access public
* @func external:Math.rnd
* @param {number} min - 范围下限（被包括）
* @param {number} max - 范围上限（不包括）
* @param {boolean} [int = true] - 是否需要整数
* @returns {number} 
* @example
* console.log(Math.rnd(1, 10));
* console.log(Math.rnd(1, 10, false));
*/
