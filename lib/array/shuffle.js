
define([
	'../math/rnd',
	'../math/clip'
], function (R, P) {

return Array.prototype.shuffle = function (m) {
	var t = Object(this),
		l = t.length >>> 0,
		r = new Array(l),
		i = 0,
		n;
	for(; i < l; i++) {
		n = R(0, i);
		if (n != i) r[i] = r[n];
		r[n] = t[i];
	}
	return m ? r.slice(P(l - m, l - 1)) : r;
};

});

/**
* 返回一个对已有数组的元素进行随机乱序（洗牌）处理的新数组。
* @see {@link external:Array#rnd}
* @see {@link external:Array#reorder}
* @see {@link http://bost.ocks.org/mike/shuffle/}
* @see {@link http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle}
* @access public
* @func external:Array.prototype.shuffle
* @param {number} [num] - 取样数。默认为全部元素
* @returns {array}
* @example
* console.log([1, 2, 3, 4, 5, 6].shuffle( ));
* console.log([1, 2, 3, 4, 5, 6].shuffle(3));
* console.log([1, 2, 3, 4, 5, 6].shuffle(8));
*/
