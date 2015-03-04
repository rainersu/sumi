
define(
[
	'./lab2rgb'
]
, function (
	lab2rgb
) 
{'use strict';

return  function (v) {
	var c = v[1],
		x = v[2] / 360 * 2 * Math.PI;
	return lab2rgb([
		v[0], 
		c * Math.cos(x), 
		c * Math.sin(x)
	]);
};

});
