
define(function () {'use strict';

return  function (x) {
	var y = x[0],
		u = x[1] / 255 * 222 - 111,
		v = x[2] / 255 * 312 - 155;
	return [
		y + v / 0.877,
		y - 0.39466 * u - 0.5806 * v,
		y + u / 0.493
	];
};

});
