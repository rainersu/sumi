
define(function () {'use strict';

var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

return function (u, b) {
	b = b || '';
	var l = u.length,
		x = l * 8,
		o = '',
		i = 0,
		j,
		t;
	for(; i < l; i+= 3) {
		t = (u.charCodeAt(i) << 16) | (i + 1 < l ? u.charCodeAt(i + 1) << 8 : 0) | (i + 2 < l ? u.charCodeAt(i + 2) : 0);
		for(j = 0; j < 4; j++) {
			o+= i * 8 + j * 6 > x ? b : a.charAt((t >>> 6 * (3 - j)) & 0x3F);
		}
	}
	return o;
};

});

