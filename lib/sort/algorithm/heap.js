
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';

function heap (c, x, z, p) {
	var a = 2 * x + 1,
		b = 2 * x + 2,
		e = x;
	if (a < z && p(c[a], c[x]) > 0) e = a;
	if (b < z && p(c[b], c[e]) > 0) e = b;
	if (e !== x) {
		swap(c, e, x);
		heap(c, e, z, p);
	}
}

return function (c, l, p) {
	var i = l / 2 >>> 0;
	for (; i--;) {
		heap(c, i, l, p);
	}
	for (; --l;) {
		swap(c, 0, l);
		heap(c, 0, l, p);
	}
	return c;
};

});

/**
* 堆排序。
* @see {@link http://en.wikipedia.org/wiki/Heapsort}
* @access public
* @func Sumi.Sort.heap
*/
