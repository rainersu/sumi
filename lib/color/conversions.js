
define(function () {'use strict';


return {
	rgb2hsl : function (v) {
		var r = v[0] / 255,
			g = v[1] / 255,
			b = v[2] / 255,
			n = N(r, g, b),
			x = X(r, g, b),
			d = x - n,
			h = n === x ? 0 : 
				r === x ? (g - b) / d : 
				g === x ? (b - r) / d + 2 : 
				(r - g) / d + 4,
			l = (n + x) / 2, 
			s = x === n ? 0 : 
				d / (l <= 0.5 ? x + n : 2 - x - n);
		return [
			H(h) *  60,
			s * 100,
			l * 100
		];
	},
	hsl2rgb : function (v) {
		var h = v[0] /  60,
			s = v[1] / 100,
			l = v[2] / 100,
			b = l <= .5 ? l * (s + 1) : l + s - l * s,
			a = l * 2 - b;
		return [
			T(a, b, h + 2),
			T(a, b, h),
			T(a, b, h - 2)
		];
	},
	rgb2hwb : function (v) {
		var r = v[0],
			g = v[1],
			b = v[2],
			x = 100 / 255;
		return [
			rgb2hsl(v)[0], 
			x * N(r, N(g, b)),
			100 - x * X(r, X(g, b))
		];
	},
	hwb2rgb : function (v) {
		var w = v[1] / 100,
			b = v[2] / 100,
			i = 0;
		for(v = hsl2rgb([ v[0], 100, 50 ]); i < 3; i++) {
			v[i] = v[i] * (1 - w - b) + w * 255;
		}
		return v;
	},
	rgb2hsv : function (v) {
		var r = v[0],
			g = v[1],
			b = v[2],
			n = N(r, g, b),
			x = X(r, g, b);
		return [
			rgb2hsl(v)[0], 
			x ? 100 - (100 * n / x) : 0, 
			x * 100 /  255
		];
	},
	hsv2rgb : function (x) {
		var h = x[0] /  60,
			s = x[1] / 100,
			v = x[2] / 100 * 255,
			f = h - Math.floor(h),
			p = v * (1 - s),
			q = v * (1 - s * f),
			t = v * (1 - (s * (1 - f))),
			z = Math.floor(h) % 6;
		return z > 4 ? [v, p, q] :
		       z > 3 ? [t, p, v] :
		       z > 2 ? [p, q, v] :
		       z > 1 ? [p, v, t] :
		       z ? [q, v, p] : [v, t, p];
	},
	rgb2cmyk: function (v) {
		var r = v[0] / 255,
			g = v[1] / 255,
			b = v[2] / 255,
			k = 1 - X(r, g, b),
			x = 1 - k,
			c = 0,
			m = 0,
			y = 0;
		if (x) {
			c = 1 - r / x;
			m = 1 - g / x;
			y = 1 - b / x;
		}
		return [
			c * 100, 
			m * 100, 
			y * 100, 
			k * 100
		];
	},
	cmyk2rgb: function (v) {
		var c = v[0] / 100,
			m = v[1] / 100,
			y = v[2] / 100,
			k = v[3] / 100;
		return [
			255 - N(1, c * (1 - k) + k) * 255,
			255 - N(1, m * (1 - k) + k) * 255,
			255 - N(1, y * (1 - k) + k) * 255 
		];
	},
	rgb2yuv : function (v) {
		var r = v[0],
			g = v[1],
			b = v[2];
		return [
			0.299 * r + 0.587 * g + 0.114 * b,
			128 - 0.169 * r - 0.331 * g + 0.5 * b,
			128 + 0.5 * r - 0.419 * g - 0.081 * b
		];
	},
	yuv2rgb : function (x) {
		var y = x[0],
			u = x[1],
			v = x[2];
		return [
			y + 1.13983 * (v - 128),
			y - 0.39465 * (u - 128) - 0.58060 * (v - 128),
			y + 2.03211 * (u - 128)
		];
	},
	rgb2xyz : function (v) {
		var r = Q(v[0]),
			g = Q(v[1]),
			b = Q(v[2]);
		return [
			r * 41.24 + g * 35.76 + b * 18.05, 
			r * 21.26 + g * 71.52 + b *  7.22, 
			r *  1.93 + g * 11.92 + b * 95.05
		];
	},
	xyz2rgb : function (v) {
		var x = v[0] / 100,
			y = v[1] / 100,
			z = v[2] / 100;
		return [
			P(x * 3.2406 - y * 1.5372 - z * 0.4986),
			P(y * 1.8758 - x * 0.9689 + z * 0.0415),
			P(x * 0.0557 - y * 0.2040 + z * 1.0570)
		];
	},
	rgb2lab : function (v) {
		v =  rgb2xyz (v);
		var x = E(v[0] / 95.047),
			y = E(v[1] / 100),
			z = E(v[2] / 108.883);
		return [
			116 * y - 16, 
			500 * (x - y), 
			200 * (y - z)
		];
	},
	lab2rgb : function (v) {
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
	},
	rgb2lch : function (v) {
		v =  rgb2lab (v);
		var a = v[1],
			b = v[2];
		return [
			v[0],
			Math.sqrt(a * a + b * b), 
			60 * H(Math.atan2(b, a) * 6 / 2 / Math.PI)
		];
	},
	lch2rgb : function (v) {
		var c = v[1],
			x = v[2] / 360 * 2 * Math.PI;
		return lab2rgb([
			v[0], 
			c * Math.cos(x), 
			c * Math.sin(x)
		]);
	}
};

});
