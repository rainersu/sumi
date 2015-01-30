
define([
	'../math/rnd'
], function (N) {

return Array.prototype.rnd = function(min, max) {
	var o = Object(this);
	return o[N(max >>> 0 || o.length >>> 0, min >>> 0)];
};

});

/**
* 从数组中随机获取一个元素。
* @see {@link external:Array#shuffle}
* @see {@link external:Array#reorder}
* @see {@link external:Math.rnd}
* @see {@link rnd.number}
* @access public
* @func external:Array.prototype.rnd
* @param {number} [min = 0] - 索引值范围下限（被包括）
* @param {number} [max = this.length] - 索引值范围上限（不包括）
* @returns {*} 获取到的随机元素 
* @example
* console.log([1, 2, 3].rnd());
* console.log(['a', 'b', 'c'].rnd(2));
*/
