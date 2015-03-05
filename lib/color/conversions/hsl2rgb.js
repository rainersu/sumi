
define(
[
	'./util/h'
]
, function (
	H
) 
{'use strict';

function T (a, b, h) {
	h = H(h);
	return (
		h < 1 ? (b - a) * h + a :
		h < 3 ?  b :
		h < 4 ? (b - a) * (4 - h) + a : a
	) * 255;
}

return  function (v) {
	var h = v[0] /  60,
		s = v[1] / 100,
		l = v[2] / 100,
		b = l <= .5 ? l * (s + 1) : l + s - l * s,
		a = l * 2 - b;
	return [
		T(a, b, h + 2),
		T(a, b, h),
		T(a, b, h - 2)
	];
};

});
