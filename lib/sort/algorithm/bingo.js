
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';
	
return function (c, l, p) {
	var m = l - 1,
		n = c[m],
		i = m,
		w;
	for(; i--;) {
		if (p(w = c[i], n) > 0) n = w;
	}
	while (m > 0 && !p(c[m], n))  --m;
	while (m > 0) {
		w = n;
		n = c[m];
		for(i = m; i--;) {
			if (!p(c[i], w)) swap(c, i,  m--);
			else if (p(c[i], n) > 0) n = c[i];
		}
		while (m > 0 && !p(c[m], n)) --m;
	}
	return c;
};

});

/**
* 宾果排序。
* @see {@link http://en.wikipedia.org/wiki/Selection_sort}
* @access public
* @func Sumi.Sort.bingo
*/
