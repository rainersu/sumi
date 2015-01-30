
define([
	'../var/object'
], function (O) {

return Array.prototype.includes = Array.prototype.includes || function (searchElement, fromIndex) {
    var o = O(this),
		l = o.length >>> 0,
		n = fromIndex >> 0,
		k = n < 0 ? Math.max(l + n, 0) : n,
		s = searchElement,
		i;
    while(k < l) { 
		if(k in o) {
			i = o[k];
			if (s === i || (s !== s && i !== i)) {
				return true;
			}
		}
		k++;
	}
    return false;
};

});

/**
* ECMAScript 7 Proposal <br>
* 测试数组内是否包含指定的元素。
* @see {@link external:Array#contains}
* @see {@link external:Array#find}
* @see {@link external:Array#findIndex}
* @see {@link external:Array#indexOf}
* @see {@link external:Array#lastIndexOf}
* @access public
* @func external:Array.prototype.includes
* @param {*} searchElement - 要搜索的元素
* @param {number} [fromIndex = 0] - 开始搜索的索引
* @returns {boolean} 是否找到了指定元素
* @example
* console.log([1, 2, 3].includes(2));                      // true
* console.log([1, 2, 3].includes(4));                      // false
* console.log([1, 2, 3].includes(3, 3));                   // false
* console.log([1, 2, 3].includes(3, -1));                  // true
* console.log([1, 2, NaN].includes(NaN));                  // true
*/
