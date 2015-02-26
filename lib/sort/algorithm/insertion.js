
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';


return function (c, l, p) {
	var i = 1;
	for(; i < l; i++) {
		var x = c[i],
			j = i;
		while(j && p(c[j - 1], x) > 0) {
			c[j] = c[j - 1];
			j--;
		}
		c[j] = x;
	}
	return c;
};

});

/**
* 插入排序。
* @see {@link http://en.wikipedia.org/wiki/Insertion_sort}
* @access public
* @func Sumi.Sort.insertion
*/
