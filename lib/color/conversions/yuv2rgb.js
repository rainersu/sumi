
define(function () {'use strict';

return  function (x) {
	var y = x[0],
		u = x[1],
		v = x[2];
	return [
		y + 1.13983 * (v - 128),
		y - 0.39465 * (u - 128) - 0.58060 * (v - 128),
		y + 2.03211 * (u - 128)
	];
};

});
