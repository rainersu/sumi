 
define(function () {

return Array.prototype.lastIndexOf = Array.prototype.lastIndexOf || function (searchElement, fromIndex) {
	var o = Object(this),
		l = o.length >>> 0,
		n = arguments.length < 2 ? l : fromIndex >> 0,
		k = Math.min(n < 0 ? l + n : n, l - 1),
		s = searchElement,
		i;
    while(k > -1) { 
		if(k in o) {
			i = o[k];
			if (s === i || (s !== s && i !== i)) {
				return k;
			}
		}
		k--;
	}
    return -1;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 在数组内搜索指定元素，返回元素在数组中最后一次出现的索引值。
* @see {@link external:Array#contains}
* @see {@link external:Array#find}
* @see {@link external:Array#findIndex}
* @see {@link external:Array#includes}
* @see {@link external:Array#indexOf}
* @access public
* @func external:Array.prototype.lastIndexOf
* @param {*} searchElement - 要搜索的元素
* @param {number} [fromIndex = this.length] - 开始搜索的索引
* @returns {number} 索引值。没找到则返回 -1
* @example
* var array = [2, 5, 9, 2];
* console.log(array.lastIndexOf(2));                       //  3
* console.log(array.lastIndexOf(7));                       // -1
* console.log(array.lastIndexOf(2, 3));                    //  3
* console.log(array.lastIndexOf(2, 2));                    //  0
* console.log(array.lastIndexOf(2, -2));                   //  0
* console.log(array.lastIndexOf(2, -1));                   //  3
*/
