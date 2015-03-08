
define(
[
	'./util/n'
]
, function (
	N
) 
{'use strict';

return  function (v) {
	var TWOPI = Math.PI * 2, 
		r = v[0] / 255, 
		g = v[1] / 255, 
		b = v[2] / 255, 
		min = N(r, g, b),
		i = (r + g + b) / 3,
		s = 1 - min / i,
		h = 0;
	if (s) {
		h = Math.acos((r - g + r - b) / 2 / Math.sqrt((r - g) * (r - g) + (r - b) * (g - b)));
		h = b > g ? TWOPI - h : h / TWOPI;
	} 
	return [
		h * 360, 
		s * 100, 
		i * 100
	];
};

});
