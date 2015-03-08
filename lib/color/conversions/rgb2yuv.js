
define(function () {'use strict';

return  function (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		y = 0.299 * r + 0.587 * g + 0.114 * b;
	return [
		y,
		((b - y) * 0.493 + 111) / 222 * 255,
		((r - y) * 0.877 + 155) / 312 * 255
	];
};

});
