
define(
[
	'../var/slice',
	'../var/concat',
	'./uniq'
]
, function (
	slice, 
	concat,
	uniq
) 
{'use strict';
	
return function () {
	var a = slice.call(arguments),
		o = uniq(a.shift()),
		l = o.length,
		c = concat.apply([], a),
		h = c.length,
		r = [],
		i = 0,
		m,
		n,
		w,
		x,
		y,
		b;
	if (!h) r = o;
	else if (l) {
		for(; i < l; i++) {
			b = true;
			m = o[i];
			for(n = 0; n < h; n++) {
				w = c[n];
				if (w === m || (w !== w && m !== m)) {
					b = false;
					break;
				}	
			}
			if (b) r.push(m);
		}
	} 
	return r;
};

});
		
/**
* 计算第一个数组与其它若干个数组的相对补集（差集）。
* @see {@link Sumi.Array.union}
* @see {@link Sumi.Array.intersect}
* @access public
* @func Sumi.Array.difference
* @param {...array} [arr] - 要加入差集运算的数组
* @returns {array}
* @example
* console.log(Sumi.Array.difference([1, 2, 3, 4], [2, 3], [3, 4]));  // [ 1 ]
* console.log(Sumi.Array.difference([1, 2, 3, 4], null, []));        // [ 1, 2, 3, 4 ]
* console.log(Sumi.Array.difference([], [1, 2, 3]));                 // []
* console.log(Sumi.Array.difference([1, 2], 2, 3 ));                 // [ 1 ]
*/
