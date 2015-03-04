
define(function () {'use strict';

return  function (v) {
	var r = v[0],
		g = v[1],
		b = v[2];
	return [
		0.299 * r + 0.587 * g + 0.114 * b,
		128 - 0.169 * r - 0.331 * g + 0.5 * b,
		128 + 0.5 * r - 0.419 * g - 0.081 * b
	];
};

});
