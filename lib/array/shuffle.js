
define(
[
	'../math/rnd',
	'../math/clip'
]
, function (
	rnd, 
	clip
) 
{'use strict';

return function (t, m) {
	t = Object(t);
	var l = t.length >>> 0,
		r = new Array(l),
		i = 0,
		n;
	for(; i < l; i++) {
		n = rnd(0, i);
		if (n != i) r[i] = r[n];
		r[n] = t[i];
	}
	return m ? r.slice(clip(l - m, l - 1)) : r;
};

});

/**
* 返回一个对已有数组的元素进行随机乱序（洗牌）处理的新数组。
* @see {@link Sumi.Math.rnd}
* @see {@link Sumi.Array.rnd}
* @see {@link Sumi.Array.reorder}
* @see {@link http://bost.ocks.org/mike/shuffle/}
* @see {@link http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle}
* @access public
* @func Sumi.Array.shuffle
* @param {number} [num] - 取样数。默认为全部元素
* @returns {array}
* @example
* console.log(Sumi.Array.shuffle());               // []
* console.log(Sumi.Array.shuffle('123'));          // [ '2', '3', '1' ]
* console.log(Sumi.Array.shuffle('123', 1));       // [ '2' ]
* console.log(Sumi.Array.shuffle([1, 2, 3], 2));   // [ 3, 1 ]
*/
