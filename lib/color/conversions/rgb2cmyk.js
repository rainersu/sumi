
define(
[
	'./util/x'
]
, function (
	X
) 
{'use strict';

return  function (v) {
	var r = v[0] / 255,
		g = v[1] / 255,
		b = v[2] / 255,
		k = 1 - X(r, g, b),
		x = 1 - k,
		c = 0,
		m = 0,
		y = 0;
	if (x) {
		c = 1 - r / x;
		m = 1 - g / x;
		y = 1 - b / x;
	}
	return [
		c * 100, 
		m * 100, 
		y * 100, 
		k * 100
	];
};

});
