
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';

var a = [1, 5, 19, 41, 109];

return function (c, l, p) {
	var w = a.length,
		g,
		i,
		j,
		t;
	for(; w--;) {
		g = a[w];
		for(i = g; i < l; i++) {
			t = c[i];
			for(j = i; j >= g && p(c[j - g], t) > 0; j-= g) {
            	c[j] = c[j - g];
        	}
			c[j] = t;
		}
	}
	return c;
};

});

/**
* 希尔排序。
* @see {@link http://en.wikipedia.org/wiki/Shellsort}
* @access public
* @func Sumi.Sort.shell
*/
