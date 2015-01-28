
define(function () {

return Array.prototype.rnd = function(min, max) {
	return this[Math.rnd(min >>> 0, (+max || this.length) >>> 0)];
};

});

/**
* 从数组中随机获取一个元素。
* @see {@link external:Array#shuffle}
* @see {@link external:Array#reorder}
* @see {@link external:Math.rnd}
* @access public
* @func external:Array.prototype.rnd
* @param {number} [min = 0] - 索引值范围下限（被包括）
* @param {number} [max = this.length] - 索引值范围上限（不包括）
* @returns {*} 获取到的随机元素 
* @example
* console.log([1, 2, 3].rnd());
* console.log(['a', 'b', 'c'].rnd(2));                     // 'c'
*/
