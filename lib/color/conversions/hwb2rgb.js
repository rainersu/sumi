
define(
[
	'./hsl2rgb'
]
, function (
	hsl2rgb
) 
{'use strict';

return  function (v) {
	var w = v[1] / 100,
		b = v[2] / 100,
		i = 0;
	for(v = hsl2rgb([ v[0], 100, 50 ]); i < 3; i++) {
		v[i] = v[i] * (1 - w - b) + w * 255;
	}
	return v;
};

});
