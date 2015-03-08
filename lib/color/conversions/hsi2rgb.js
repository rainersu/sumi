
define(function () {'use strict';

return  function (x) {
	var h = x[0] / 360,
		s = x[1] / 100,
		i = x[2] / 100,
		m = Math.PI,
	    t = m * 2,
		p = m / 3,
		r,
		g,
		b;
	if (h < 1 / 3) {
		b = (1 - s) / 3;
		r = (1 + s * Math.cos(t * h) / Math.cos(p - t * h)) / 3;
		g = 1 -  b -  r;
	} 
	else if (h < 2 / 3) {
		h-= 1 / 3;
		r = (1 - s) / 3;
		g = (1 + s * Math.cos(t * h) / Math.cos(p - t * h)) / 3;
		b = 1 -  r -  g;
	} 
	else {
		h-= 2 / 3;
		g = (1 - s) / 3;
		b = (1 + s * Math.cos(t * h) / Math.cos(p - t * h)) / 3;
		r = 1 -  g -  b;
	}
	return [
		i * r * 3 * 255, 
		i * g * 3 * 255, 
		i * b * 3 * 255
	];
};

});
