
define(
[
	'./rgb2hsl',
	'./hsl2rgb',
	'./rgb2hwb',
	'./hwb2rgb',
	'./rgb2hsv',
	'./hsv2rgb',
	'./rgb2cmyk',
	'./cmyk2rgb',
	'./rgb2yuv',
	'./yuv2rgb',
	'./rgb2xyz',
	'./xyz2rgb',
	'./rgb2lab',
	'./lab2rgb',
	'./rgb2lch',
	'./lch2rgb',
	'./rgb2hsi',
	'./hsi2rgb'
]
, function (
	rgb2hsl,
	hsl2rgb,
	rgb2hwb,
	hwb2rgb,
	rgb2hsv,
	hsv2rgb,
	rgb2cmyk,
	cmyk2rgb,
	rgb2yuv,
	yuv2rgb,
	rgb2xyz,
	xyz2rgb,
	rgb2lab,
	lab2rgb,
	rgb2lch,
	lch2rgb,
	rgb2hsi,
	hsi2rgb
) 
{'use strict';

return {
	rgb2hsl : rgb2hsl,
	hsl2rgb : hsl2rgb,
	rgb2hwb : rgb2hwb,
	hwb2rgb : hwb2rgb,
	rgb2hsv : rgb2hsv,
	hsv2rgb : hsv2rgb,
	rgb2cmyk: rgb2cmyk,
	cmyk2rgb: cmyk2rgb,
	rgb2yuv : rgb2yuv,
	yuv2rgb : yuv2rgb,
	rgb2xyz : rgb2xyz,
	xyz2rgb : xyz2rgb,
	rgb2lab : rgb2lab,
	lab2rgb : lab2rgb,
	rgb2lch : rgb2lch,
	lch2rgb : lch2rgb,
	rgb2hsi : rgb2hsi,
	hsi2rgb : hsi2rgb
};

});
