
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';

return function (c, l, p){
	var i = 1;
	while (i < l) {
		if (swap(c, i - 1, i, p)) {
			if (i > 1) i--;
		}
		else i++;
	}
	return c;
};

});
								
/**
* 地精排序。
* @see {@link http://en.wikipedia.org/wiki/Gnome_sort}
* @access public
* @func Sumi.Sort.gnome
*/
