
define(
[
	'./util/x',
	'./util/n'
]
, function (
	X,
	N
) 
{'use strict';

return  function (v) {
	var r = v[0] / 255,
		g = v[1] / 255,
		b = v[2] / 255,
		n = N(r, g, b),
		x = X(r, g, b),
		d = x - n,
		h = n === x ? 0 : 
			r === x ? (g - b) / d : 
			g === x ? (b - r) / d + 2 : 
			(r - g) / d + 4,
		l = (n + x) / 2, 
		s = x === n ? 0 : 
			d / (l <= 0.5 ? x + n : 2 - x - n);
	return [
		H(h) *  60,
		s * 100,
		l * 100
	];
};

});
