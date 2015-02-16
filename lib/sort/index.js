
define(
[
	'./algorithm/bubble',
	'../var/slice',
]
, function (
	bubble,
	slice
) 
{'use strict';

var Sort = {},
	a = arguments,
	l = a.length,
	i;

function compare(a, b) {
	return a > b;
}

while(l--) {
	i = a[l];
	(function (n, f) {
		Sort[n] = function (c, p) {
			c = slice.call(Object(c));
			return  f(c, c.length, p || compare);
		} 
	})(i.name, i.func);
}

return Sort;

});
