
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';
	
return function (c, l, p) {
	var i,
		j = 0,
		x = l - 1,
		w;
	for(; j < x; j++) {
	    w = j;
	    for(i = j + 1; i < l; i++) { 
	        if (p(c[w], c[i]) > 0) w = i;
	    }
	    if (w !== j) swap(c, j, w);
	}
	return c;
};

});

/**
* 选择排序。
* @see {@link http://en.wikipedia.org/wiki/Selection_sort}
* @access public
* @func Sumi.Sort.selection
*/
