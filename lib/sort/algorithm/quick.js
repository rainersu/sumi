
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';

function q (c, p, x, y) {
	if (x >= y) return;
	var n = c[(x + y) / 2 >> 0],
		i = x - 1,
		j = y + 1;
	while (true) {
		while (p(n, c[++i]) > 0) ;
		while (p(c[--j], n) > 0) ;
		if (i >= j) break;
		swap(c, i, j);
	}
	q(c, p, x, i - 1);
	q(c, p, j + 1, y);
}
	
return function (c, l, p) {
	q(c, p, 0, l - 1);
	return c;
};

});

/**
* 快速排序。
* @see {@link http://en.wikipedia.org/wiki/Quicksort}
* @access public
* @func Sumi.Sort.quick
*/
