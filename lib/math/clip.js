
define(function () {'use strict';
	
return function (n, b, a) {
	return Math.min(b, Math.max(a || 0, n));
};

});

/**
* 将数字限制到指定范围内。
* @access public
* @func Sumi.Math.clip
* @param {number} num - 要检查的数值
* @param {number} max - num 不大于 max
* @param {number} [min=0] - num 不小于 min
* @returns {number} 
* @example
* console.log(Sumi.Math.clip(11, 10, 1));      // 10
* console.log(Sumi.Math.clip(-1, 10, 1));      //  1
*/
