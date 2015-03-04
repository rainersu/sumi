
define(
[
	'./rgb2xyz'
]
, function (
	rgb2xyz
) 
{'use strict';

function E (i) {
	return i > 0.008856 ? Math.pow(i, 1 / 3) : 
	       7.787 * i + 16 / 116;
}

return  function (v) {
	v = rgb2xyz  (v);
	var x = E(v[0] / 95.047),
		y = E(v[1] / 100),
		z = E(v[2] / 108.883);
	return [
		116 * y - 16, 
		500 * (x - y), 
		200 * (y - z)
	];
};

});
