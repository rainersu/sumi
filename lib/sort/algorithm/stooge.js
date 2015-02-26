
define(
[
	'./util/swap'
]
,function (
	swap
) 
{'use strict';

function q (c, p, i, j) {
	swap(c, i, j, p);
    if (j - i + 1 > 2) {
        var t = (j - i + 1) / 3 >> 0;
        q(c, p, i    , j - t);
        q(c, p, i + t, j    );
        q(c, p, i    , j - t);
	}
}
			
return function (c, l, p) {
	q(c, p, 0, l - 1);
	return c;
};

});

/**
* 小丑排序。
* @see {@link http://en.wikipedia.org/wiki/Stooge_sort}
* @access public
* @func Sumi.Sort.stooge
*/
