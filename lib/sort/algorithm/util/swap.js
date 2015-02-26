
define(function () {'use strict';

return function (c, x, y, p) {
	var a = c[x],
		b = c[y];
	if (p === undefined || p(a , b) > 0) {
		c[x] = b;
		c[y] = a;console.log(c);
		return 1;
	}
};

});
