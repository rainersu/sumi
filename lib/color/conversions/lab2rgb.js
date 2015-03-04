
define(
[
	'./xyz2rgb'
]
, function (
	xyz2rgb
) 
{'use strict';

function F (i) {
	var f = Math.pow(i, 3);
	return f > 0.008856 ? f : (i - 16 / 116) / 7.787;
}

return  function (v) {
	var l = v[0],
		a = v[1],
		b = v[2],
    	y = (l + 16) / 116,
	    x = a / 500 + y,
	    z = y - b / 200;
	return xyz2rgb([
		F(x) *  95.047, 
		F(y) * 100.000, 
		F(z) * 108.883
	]);
};

});
