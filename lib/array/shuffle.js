
define(
[
	'../math/rnd'
]
, function (
	rnd
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
	return m ? r.slice(0, m) : r;
};

/*
return function (t, m) {
	t = Object(t);
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
*/

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
