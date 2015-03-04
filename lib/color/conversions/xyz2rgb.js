
define(function () {'use strict';

function P (i) {
	return 255 * (i > 0.0031308 ? 1.055 * Math.pow(i, 1.0 / 2.4) - 0.055 : i * 12.92);
}

return  function (v) {
	var x = v[0] / 100,
		y = v[1] / 100,
		z = v[2] / 100;
	return [
		P(x * 3.2406 - y * 1.5372 - z * 0.4986),
		P(y * 1.8758 - x * 0.9689 + z * 0.0415),
		P(x * 0.0557 - y * 0.2040 + z * 1.0570)
	];
};

});
