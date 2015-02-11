
define(function () {'use strict';

var h = [ ],
	i = 256;

for (; i--;) {
	h[i] = (i + 0x100).toString(16).substr(1);
}

return function (f) {
	var i = 0, 
		b = h;
	return  b[f[i++]] + b[f[i++]] +
			b[f[i++]] + b[f[i++]] + '-' +
			b[f[i++]] + b[f[i++]] + '-' +
			b[f[i++]] + b[f[i++]] + '-' +
			b[f[i++]] + b[f[i++]] + '-' +
			b[f[i++]] + b[f[i++]] +
			b[f[i++]] + b[f[i++]] +
			b[f[i++]] + b[f[i++]];
}

});
