
define(function () {'use strict';

var S = 'rgb=111,hsl=322,hsv=322,hsb=322,hsi=322,hwb=322,cmyk=2222,xyz=000,lab=000,lch=000,yuv=000'.split(','),
	X = {},
	n = S.length, 
	i, 
	s;

for(; n--;) {
	s = S[n].split('=');
	X[s[0]] = Object(s[1] + 2);
}

return X;

});
