
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';
	
return function (c, l, p) {
    var x = l, 
		m, 
		y, 
		i, 
		t;
	for(; x--;) {
		m = c[x];
		y = x;
		for(i = x + 1; i < l; i++) {
			if (p(m, c[i]) > 0) y++;
		}
		if (y === x) continue;
		while (!p(m, c[y])) y++;
		t = c[y]; 
		c[y] = m; 
		m = t;
		while(y !== x) {
			y = x;
			for(i = x + 1; i < l; i++) {
				if (p(m, c[i]) > 0) y++;
			}
			while (!p(m, c[y])) y++;
			t = c[y];
			c[y] = m; 
			m = t;
		}
	}
    return c;
};

});

/**
* 圈排序。
* @see {@link http://en.wikipedia.org/wiki/Cycle_sort}
* @access public
* @func Sumi.Sort.cycle
*/
