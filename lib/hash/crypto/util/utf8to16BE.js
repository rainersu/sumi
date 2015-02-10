
define(function () {'use strict';

return function (i) {
	var o = '',
		n = 0,
		l = i.length,
		x;
	for(; n < l; n++) {
		x = i.charCodeAt(n);
		o+= String.fromCharCode((x >>> 8) & 0xFF, x & 0xFF);
	}
	return o;
};

});
