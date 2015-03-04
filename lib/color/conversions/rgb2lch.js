
define(
[
	'./rgb2lab'
]
, function (
	rgb2lab
) 
{'use strict';

return  function (v) {
	v = rgb2lab  (v);
	var a = v[1],
		b = v[2];
	return [
		v[0],
		Math.sqrt(a * a + b * b), 
		60 * H(Math.atan2(b, a) * 6 / 2 / Math.PI)
	];
};

});
