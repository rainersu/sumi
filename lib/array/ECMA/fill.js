
define(function () {'use strict';

return function (v, r, g) {
	r = r >> 0;
	var o = Object(this),
		m = Math,
		l = o.length >>> 0,
		k = r < 0 ? m.max(l + r, 0) : m.min(r, l),
		d = arguments.length < 3 ? l : g >> 0,
		f = d < 0 ? m.max(l + d, 0) : m.min(d, l);
	while(k < f) o[k++] = v;
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
* console.log([1, 2, 3].fill(4));                // [ 4, 4, 4 ]
* console.log([1, 2, 3].fill(4, 1));             // [ 1, 4, 4 ]
* console.log([1, 2, 3].fill(4, 1, 2));          // [ 1, 4, 3 ]
* console.log([1, 2, 3].fill(4, 1, 1));          // [ 1, 2, 3 ]
* console.log([1, 2, 3].fill(4, -3, -2));        // [ 4, 2, 3 ]
* console.log([1, 2, 3].fill(4, NaN, NaN));      // [ 1, 2, 3 ]
* console.log([].fill.call({ length: 3 }, 4));   // { 0: 4, 1: 4, 2: 4, length: 3 }
*/
