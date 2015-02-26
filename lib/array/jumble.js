
define(
[
	'../math/rnd',
	'../var/slice'
]
, function (
	rnd,
	slice
) 
{'use strict';

return function (t, m) {
	t = slice.call(Object(t));
    var l = t.length >>> 0,
		p, 
		w;
    while(l--) { 
		p = rnd(0, l); 
		w = t[l]; 
		t[l] = t[p]; 
		t[p] = w;
	}   
    return m ? t.slice(0, m) : t;
};

});

/**
* 返回一个对已有数组的元素进行随机乱序（洗牌）处理的新数组。
* @see {@link Sumi.Array.shuffle}
* @see {@link Sumi.Math.rnd}
* @see {@link Sumi.Array.rnd}
* @see {@link Sumi.Array.reorder}
* @see {@link http://bost.ocks.org/mike/shuffle/}
* @see {@link http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle}
* @access public
* @func Sumi.Array.jumble
* @param {number} [num] - 取样数。默认为全部元素
* @returns {array}
* @example
* console.log(Sumi.Array.jumble());               // []
* console.log(Sumi.Array.jumble('123'));          // [ '2', '3', '1' ]
* console.log(Sumi.Array.jumble('123', 1));       // [ '2' ]
* console.log(Sumi.Array.jumble([1, 2, 3], 2));   // [ 3, 1 ]
*/
