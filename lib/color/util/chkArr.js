
define([
	'./chkHue',
	'../spaces'
]
, function (
	chkHue,
	S
) 
{'use strict';

return function (v, t) {
	var l = v.length;
	for(t = S[t || 0]; l--;) {
		v[l] = chkHue(v[l], t[l]);
	}
	return v;
};

});
