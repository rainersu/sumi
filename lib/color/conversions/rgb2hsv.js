
define(
[
	'./util/x',
	'./util/n',
	'./rgb2hsl'
]
, function (
	X,
	N,
	rgb2hsl
) 
{'use strict';

return  function (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		n = N(r, g, b),
		x = X(r, g, b);
	return [
		rgb2hsl(v)[0], 
		x ? 100 - (100 * n / x) : 0, 
		x * 100 /  255
	];
};

});
