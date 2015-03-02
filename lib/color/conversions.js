
define(function () {'use strict';

function H (h) {
	return h < 0 ? h + 6 : h >= 6 ? h - 6 : h;
}
function T (a, b, h) {
	h = H(h);
	return (
		h < 1 ? (b - a) * h + a :
		h < 3 ?  b :
		h < 4 ? (b - a) * (4 - h) + a : a
	) * 255;
}

function rgb2hsl (v) {
	var r = v[0] / 255,
		g = v[1] / 255,
		b = v[2] / 255,
		n = Math.min(r, g, b),
		x = Math.max(r, g, b),
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
}
function hsl2rgb (v) {
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
}

//console.log(rgb2hsl([178, 38, 250]));
//console.log(hsl2rgb([279.62264150943395, 95.4954954954955, 56.470588235294116]));

function rgb2hwb (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		x = 100 / 255;
	return [
		rgb2hsl(v)[0], 
		x * Math.min(r, Math.min(g, b)),
		100 - x * Math.max(r, Math.max(g, b))
	];
}
function hwb2rgb (v) {
	var w = v[1] / 100,
		b = v[2] / 100,
		i = 0;
	for(v = hsl2rgb([ v[0], 100, 50 ]); i < 3; i++) {
		v[i] = v[i] * (1 - w - b) + w * 255;
	}
	return v;
}

//console.log(rgb2hwb([178, 34, 34]));
//console.log(hwb2rgb([0, 13.333333333333334, 30.196078431372555]));

function rgb2hsv (v) {
	var r = v[0],
		g = v[1],
		b = v[2],
		n = Math.min(r, g, b),
		x = Math.max(r, g, b);
	return [
		rgb2hsl(v)[0], 
		x ? 100 - (100 * n / x) : 0, 
		x * 100 /  255
	];
}
function hsv2rgb (x) {
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
}

//console.log(rgb2hsv([178, 38, 250]));
//console.log(hsv2rgb([279.62264150943395, 84.8, 98.03921568627452]));

function rgb2cmyk(v) {
	var r = v[0] / 255,
		g = v[1] / 255,
		b = v[2] / 255,
		k = 1 - Math.max(r, g, b),
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
}
function cmyk2rgb(v) {
	var c = v[0] / 100,
		m = v[1] / 100,
		y = v[2] / 100,
		k = v[3] / 100;
	return [
		255 - Math.min(1, c * (1 - k) + k) * 255,
		255 - Math.min(1, m * (1 - k) + k) * 255,
		255 - Math.min(1, y * (1 - k) + k) * 255 
	];
}

//console.log(rgb2cmyk([178, 38, 250]));
//console.log(cmyk2rgb([28.800000000000004, 84.8, 0, 1.9607843137254943]));

function rgb2yuv (v) {
	var r = v[0],
		g = v[1],
		b = v[2];
	return [
		0.299 * r + 0.587 * g + 0.114 * b,
		128 - 0.169 * r - 0.331 * g + 0.5 * b,
		128 + 0.5 * r - 0.419 * g - 0.081 * b
	];
}
function yuv2rgb (x) {
	var y = x[0],
		u = x[1],
		v = x[2];
	return [
		y + 1.13983 * (v - 128),
		y - 0.39465 * (u - 128) - 0.58060 * (v - 128),
		y + 2.03211 * (u - 128)
	];
}

//console.log(rgb2yuv([178, 38, 250]));
//console.log(yuv2rgb([104.02799999999999, 210.34, 180.828]));

function Q (i) {
	i /= 255;
	return i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92;
}
function P (i) {
	return 255 * (i > 0.0031308 ? 1.055 * Math.pow(i, 1.0 / 2.4) - 0.055 : i * 12.92);
}

function rgb2xyz (v) {
	var r = Q(v[0]),
		g = Q(v[1]),
		b = Q(v[2]);
	return [
		r * 41.24 + g * 35.76 + b * 18.05, 
		r * 21.26 + g * 71.52 + b *  7.22, 
		r *  1.93 + g * 11.92 + b * 95.05
	];
}
function xyz2rgb (v) {
	var x = v[0] / 100,
		y = v[1] / 100,
		z = v[2] / 100;
	return [
		P(x * 3.2406 - y * 1.5372 - z * 0.4986),
		P(y * 1.8758 - x * 0.9689 + z * 0.0415),
		P(x * 0.0557 - y * 0.2040 + z * 1.0570)
	];
}

//console.log(rgb2xyz([178, 38, 250]));
//console.log(xyz2rgb([36.308529515818876, 17.753331461514893, 91.95554327436764]));

function E (i) {
	return i > 0.008856 ? Math.pow(i, 1 / 3) : 
	       7.787 * i + 16 / 116;
}
function F (i) {
	var f = Math.pow(i, 3);
	return f > 0.008856 ? f : (i - 16 / 116) / 7.787;
}

function rgb2lab (v) {
	v =  rgb2xyz (v);
	var x = E(v[0] / 95.047),
		y = E(v[1] / 100),
		z = E(v[2] / 108.883);
	return [
		116 * y - 16, 
		500 * (x - y), 
		200 * (y - z)
	];
}
function lab2rgb (v) {
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
}

//console.log(rgb2lab([178, 34, 34]));
//console.log(lab2rgb([39.11257274771978, 55.927797038098056, 37.64861155320936]));

function rgb2lch (v) {
	v =  rgb2lab (v);
	var a = v[1],
		b = v[2];
	return [
		v[0],
		Math.sqrt(a * a + b * b), 
		60 * H(Math.atan2(b, a) * 6 / 2 / Math.PI)
	];
}
function lch2rgb (v) {
	var c = v[1],
		x = v[2] / 360 * 2 * Math.PI;
	return lab2rgb([
		v[0], 
		c * Math.cos(x), 
		c * Math.sin(x)
	]);
}

//console.log(rgb2lch([ 0, 125, 250]));
//console.log(lch2rgb([53.56707354689428, 72.49009122212192, 284.978521098016]));

});
