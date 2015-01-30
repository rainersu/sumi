
define([
	'../var/object',
	'../var/undefined'
], function (O, U) {

return Array.prototype.fill = Array.prototype.fill || function(value, start, end) {
	var o = O(this),
		l = o.length >>> 0,
		r = start >> 0,
		m = Math,
		k = r < 0 ? M.max(l + r, 0) : M.min(r, l),
		d = end === U ? l : end >> 0,
		f = d < 0 ? M.max(l + d, 0) : M.min(d, l);
	while(k < f) o[k++] = value;
	return o;	
};

});

/**
* ECMAScript 6 Draft <br>
* 批量替换数组中指定序列的元素。
* @see {@link external:Array#copyWithin}
* @access public
* @func external:Array.prototype.fill
* @param {object} [value] - 用于批量替换的新元素
* @param {number} [start = 0] - 开始替换的索引值
* @param {number} [end = this.length] - 结束替换的索引值
* @returns {array} 更新后的源数组
* @example
* console.log([1, 2, 3].fill(4));                // [4, 4, 4]
* console.log([1, 2, 3].fill(4, 1));             // [1, 4, 4]
* console.log([1, 2, 3].fill(4, 1, 2));          // [1, 4, 3]
* console.log([1, 2, 3].fill(4, 1, 1));          // [1, 2, 3]
* console.log([1, 2, 3].fill(4, -3, -2));        // [4, 2, 3]
* console.log([1, 2, 3].fill(4, 2, 5));          // [4, 2, 3]
* console.log([1, 2, 3].fill(4, NaN, NaN));      // [1, 2, 3]
* console.log([].fill.call({ length: 3 }, 4));   // {0: 4, 1: 4, 2: 4, length: 3}
*/
