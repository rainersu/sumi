
define(function () {'use strict';

function Q (i) {
	i /= 255;
	return i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92;
}

return  function (v) {
	var r = Q(v[0]),
		g = Q(v[1]),
		b = Q(v[2]);
	return [
		r * 41.24 + g * 35.76 + b * 18.05, 
		r * 21.26 + g * 71.52 + b *  7.22, 
		r *  1.93 + g * 11.92 + b * 95.05
	];
};

});
