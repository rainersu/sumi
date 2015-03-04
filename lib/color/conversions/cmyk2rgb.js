
define(
[
	'./util/n'
]
, function (
	N
) 
{'use strict';

return  function (v) {
	var c = v[0] / 100,
		m = v[1] / 100,
		y = v[2] / 100,
		k = v[3] / 100,
		l = 1 - k;
	return [
		255 - N(1, c * l + k) * 255,
		255 - N(1, m * l + k) * 255,
		255 - N(1, y * l + k) * 255 
	];
};

});
