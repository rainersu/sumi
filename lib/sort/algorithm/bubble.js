
define(function () {'use strict';

return function (c, l, p) {
	while  (l) {
		for(var e = 0, i = 1; i < l; i++) {
			var a = c[i - 1],
				b = c[i];
			if (p(a , b)) {
				c[i - 1] = b;
				c[i] = a;
				e = i;
			}
		}
		l = e;
	}
	return  c;
}

});
