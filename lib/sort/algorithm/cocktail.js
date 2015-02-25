
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';
	
return function (c, l, p) {
	var b = -1,
		d = l - 2,
		w,
		i;
	do {
		w = 0;
		for (i = ++b; i <= d; i++) {
			if (swap(c, i, i + 1, p)) w = 1;				
		}
		if (!w) break;
		w = 0;
		for (i = --d; i >= b; i--) {
			if (swap(c, i, i + 1, p)) w = 1;
		}
	}
	while (w);
	return  c;
};

});

/**
* 鸡尾酒排序 (双向冒泡排序) 。
* @see {@link http://en.wikipedia.org/wiki/Cocktail_sort}
* @access public
* @func Sumi.Sort.cocktail
*/
