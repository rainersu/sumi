
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';

return function (c, l, p){
	var g = l,
		w = 1,
		i;
	while (w || g > 1) {
		g = g / 1.3 >>> 0 || 1;
		w = 0;
		for (i = 0; i + g < l; i++) {
			if (swap(c, i, i + g, p)) w = 1;
		}				
	}
	return c;
};

});
								
/**
* 梳排序。
* @see {@link http://en.wikipedia.org/wiki/Comb_sort}
* @access public
* @func Sumi.Sort.comb
*/
