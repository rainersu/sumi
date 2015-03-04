
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
		x = 100 / 255;
	return [
		rgb2hsl(v)[0], 
		x * N(r, N(g, b)),
		100 - x * X(r, X(g, b))
	];
};

});
