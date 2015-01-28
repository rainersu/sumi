
define([
	'../number/MAX_SAFE_INTEGER',
	'../var/concat',
	'./unique'
], function (X, A, Q) {

return Array.intersect = function () {
	var a = arguments,
		l = a.length,
		i = 0,
		r = [],
		x = X,
		n,
		m,
		w,
		o,
		p = [],
		q,
		h,
		b;
	for(; i < l; i++) {
		m = a[i];
		w = m && m.length;
		if(!w) return r;
		if (w < x) {
			x = w;
			if (q) p.push(q);
			q = m;
		}
		else p.push(m);
	}
	if (p.length) {
		q = Q.call(q);
		l = p.length;
		for(i = 0; i < x; i++) {
			m = q[i];
			for (n = 0; n < l; n++) {
				w = p[n];
				h = w.length;
				for (a = 0; a < h; a++) {
					o = w[a];
					if (o === m || (o !== o && m !== m)) {
						b = true;
						break;
					}
				}
				if (a === h) {
					b = false;
					break;
				}				
			}
			if (b)  r.push(m);
		}
	}
	return r;
};

});

/**
* 计算若干个数组的交集。
* @see {@link external:Array.union}
* @see {@link external:Array.difference}
* @access public
* @func external:Array.intersect
* @param {...array} [arr] - 要加入交集运算的数组
* @returns {array}
* @example
* console.log(Array.intersect([2, 3, 4], [1, 2, 3], [2, 4, 5, 3]));     // [ 2, 3 ] 
* console.log(Array.intersect([2, 3, 4], [2, 3, 4, 5], [1, 2]));        // [ 2 ]
* console.log(Array.intersect([1], [2, 3, 4], [3, 4, 5, 2]));           // []
* console.log(Array.intersect([1 ,2], [3, 4], [5, 6]));                 // []
* console.log(Array.intersect('123', '345'));                           // [ '3' ]
*/
