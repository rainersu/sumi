
define(function () {'use strict';

return  function (x) {
	var h = x[0] /  60,
		s = x[1] / 100,
		v = x[2] / 100 * 255,
		l = ~~h,
		f = h - l,
		p = v * (1 - s),
		q = v * (1 - s * f),
		t = v * (1 - (s * (1 - f))),
		z = l % 6;
	return z > 4 ? [v, p, q] :
	       z > 3 ? [t, p, v] :
	       z > 2 ? [p, q, v] :
	       z > 1 ? [p, v, t] :
	       z ? [q, v, p] : [v, t, p];
};

});
