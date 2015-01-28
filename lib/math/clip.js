
define(function () {
	
return Math.clip = function (num, max, min) {
	return Math.min(max, Math.max(min || 0, num));
};

});

/**
* 将数字限制到指定范围内。
* @access public
* @func external:Math.clip
* @param {number} num - 要检查的数值
* @param {number} max - num 不大于 max
* @param {number} [min=0] - num 不小于 min
* @returns {number} 
* @example
* console.log(Math.clip(11, 10, 1));      // 10
* console.log(Math.clip(-1, 10, 1));      //  1
*/
