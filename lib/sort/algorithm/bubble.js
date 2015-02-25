
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';
	
return function (c, l, p) {
	while  (l) {
		for(var e = 0, i = 1; i < l; i++) {
			if (swap(c, i - 1, i, p)) e = i;
		}
		l = e;
	}
	return  c;
};

});

/**
* 冒泡排序。
* @see {@link http://en.wikipedia.org/wiki/Bubble_sort}
* @access public
* @func Sumi.Sort.bubble
*/
