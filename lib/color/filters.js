
define(function () {'use strict';

function L (x, v, b, s) {
	if (undefined === b) b =  1;
	if (undefined === s) s = 32;
	var l = v.length;
	for(s*= x ? b : -b; l--;) {
		v[l] = v[l] + s;
	}
	return v;	
}

return {
	invert     : function (v) {
		var x = 0xFF;
	    return [ v[0] ^ x, v[1] ^ x, v[2] ^ x, v[3] ];
	},
	greyscale  : function (v, a) {
		var r = v[0],
			g = v[1],
			b = v[2],
			x = a ? (13 * (r + g + b) + 5355) / 60 : r * .3 + g * .59 + b * .11;
		return [ x, x, x, v[3] ];
	},
	sepia      : function (v) {
		var r = v[0],
			g = v[1],
			b = v[2];
		return [
			r * .393 + g * .769 + b * .189,
			r * .349 + g * .686 + b * .168,
			r * .272 + g * .534 + b * .131,
			v[3]
		];
	},
	darken     : function (v, b, s) {
		return L (0, v, b, s);
	},
	lighten    : function (v, b, s) {
		return L (1, v, b, s);
	}
};

});
