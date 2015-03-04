
define(
[
	'../core/cp',
	'../core/type',
	'../var/slice',
	'../var/hasOP',
	'./keywords',
	'./conversions/index'
]
, function (
	cp,
	type,
	slice,
	hasOP,
	keywords,
	conversions
) 
{'use strict';

var R = 
	[
		/./,
		/^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
		/^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
		/^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/
	],
	K = 'hrgbslvwbcmyka',
	S = 'rgb=111,hsl=322,hsv=322,hwb=322,cmyk=2222,xyz=000,lab=000,lch=000,yuv=000'.split(','),
	X = {},
	P = [],
	n = S.length, 
	i, 
	s;

for(; n--;) {
	s = S.pop(n).split('=');
	i = s[0];
	X[i] = s[1] + 2;
	P.push(i);
	S[i] = (function (i) {
		return function (v) {
			return i;
		};
	})(i);
}

function V(v, t) {
	v = +v;
	return !t ? v : t > 2 ? ((v > 360 || v < -360 ? v %= 360 : v) < 0 ? v + 360 : v) : Math.min(t > 1 ? 100 : 255, Math.max(0, v));	
}
function A(v, t) {
	var l = v.length;
	for(t = X[t || 0]; l--;) {
		v[l] = V(v[l], t.charAt(l));
	}
	return v;
}
function F (s, v)  {
	var o = conversions,
		c = this.cache,
		p = this.space,
		f;
	if (v) {
	
	}
	else {
		if (!c[s]) {
			f = o[p + '2' + s];
			c[s] = A(f ? f(c[p]) : o['rgb2' + s](o[p + '2rgb'](c[p])), s);
			this.space = s;
			return c[s];
		}
	}
	
}

function Color (v, s) {
	if (!(this instanceof Color)) return new Color(v);
	s = s ? s.toLowerCase().replace(/a$/, '') : 'rgb';
	var c,
		x = R.length,
		w = x,
		o,
		m;
	if (type(v) === 'string') {
		v = v.toLowerCase();
		for(; x--;) if (o = R[x].exec(v)) {
			if (x) {
				if (x > 1) {
					m = o[6];
					c = x > 2 ? [
						parseInt(m ? o[1] + o[2] : o[1] + o[1], 16),
						parseInt(m ? o[3] + o[4] : o[2] + o[2], 16),
						parseInt(m ? o[5] + m    : o[3] + o[3], 16)
					] : [
						m ? o[1] * 2.55 : o[1],
						m ? o[3] * 2.55 : o[3],
						m ? o[5] * 2.55 : o[5],
						o[7] * 100
					];
				}
				else {
					s = 'hsl';
					c = o.slice(1, 5);
					c[3] *= 100;
				}
				break;
			}	
			else {
				v = keywords[v];
				if (v) x = w;
			}
		}
	}
	else {
		c = v ? slice.call(Object(v)) : [ 0, 0, 0 ];
	}
	c = A(c,  s);
	x = c.length;
	w = s.length;
	o = 100;
	if (x > w) {
		m = +c.pop();
		if (!isNaN(m)) o = m;
	}
	this.alpha = o;
	this.space = s;
	o = {};
	o[s] = c;
	this.cache = o;
	this.expired = false;
};


cp(
	Color.prototype, 
	{
		red : function (v) {
			
		}
	}
);
cp(
	Color, 
	{
		keywords   : keywords
	}
);

//console.log(new Color());
//console.log(new Color('#F30'));
//console.log(new Color([ 0, 255, 35 ]));
//console.log(new Color([ 0, 255, 35 , 50], 'hsla'));
//console.log(new Color([ 0, 255, 35 , 50, -10], 'cmyk'));
//console.log(new Color('rgb(100%, 1%, 0%)'));
console.log(new Color('hsla(240, 100%, 50%, 0.5)'));
//console.log(new Color([240, 100, 50, 50], 'hsl'));
//console.log(new Color([240, 100, 50, 50], 'hsla'));
//console.log(new Color('rgba(5, 30, 255, 0.1)'));
//console.log(new Color('#FF0033'));
//console.log(new Color('rgb(5, 30, 255)'));
//console.log(new Color('rgba(5, 30, 255, 0.1)'));
//console.log(new Color('hsl(120, 100%, 50%)'));
//console.log(new Color('rebeccapurple'));

return Color;

});

/**
* 色彩类型。
* @class Sumi.Color
* @see {@link http://en.wikipedia.org/wiki/Color_space}
* @see {@link http://en.wikipedia.org/wiki/HSL_and_HSV}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
* @see {@link https://github.com/harthur/color-convert}
* @see {@link https://github.com/avp/spectra}
*/
