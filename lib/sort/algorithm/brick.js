
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';
	
return function (c, l, p) {
	var w,
		i;
	l--;
	while (!w) {
		w = 1;
		for(i = 1; i < l; i+= 2) {
			if(swap(c, i, i + 1, p)) w = 0;
		}
		for(i = 0; i < l; i+= 2) {
			if(swap(c, i, i + 1, p)) w = 0;
		}
	}
	return c;
};

});

/**
* 奇偶排序 (砖块排序) 。
* @see {@link http://en.wikipedia.org/wiki/Odd%E2%80%93even_sort}
* @access public
* @func Sumi.Sort.brick
*/
