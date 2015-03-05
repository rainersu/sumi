
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
	K,
	C
) 
{'use strict';

var R = 
	[
		/./,
		/^hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
		/^rgba?\(\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*,\s*(\d+(?:\.\d+)?)(\%?)\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
		/^#([a-f0-9])([a-f0-9])([a-f0-9])(?:([a-f0-9])([a-f0-9])([a-f0-9]))?$/
	],
	S = 'rgb=111,hsl=322,hsv=322,hwb=322,cmyk=2222,xyz=000,lab=000,lch=000,yuv=000'.split(','),
	X = {},
	n = S.length, 
	i, 
	s;

for(; n--;) {
	s = S[n].split('=');
	S[n] = i = s[0];
	X[i] = Object(s[1] + 2);
}

function V(v, t) {
	v = +v;
	return !t ? v : t > 2 ? ((v > 360 || v < -360 ? v %= 360 : v) < 0 ? v + 360 : v) : Math.min(t > 1 ? 100 : 255, Math.max(0, v));	
}
function A(v, t) {
	var l = v.length;
	for(t = X[t || 0]; l--;) {
		v[l] = V(v[l], t[l]);
	}
	return v;
}

function Color (v, s) {
	v = v || [ 0, 0, 0 ];
	return !(this instanceof Color) ? new Color(v, s) : this.color(s, v);
};

cp(
	Color.prototype, 
	{
		css     : function (v, b) {
			if (type(v) === 'string') return this.color(0, v);
			v = +v || 0;
			b =  b && v;
			var s = (v > 1 ? 'hsl' : 'rgb') + (b ? 'a' : ''),
				c = this.color(s),
				l = c.length,
				i;
			for (; l--;) {
				i = Math.round(c[l]);
				if (!v) {
					i = i.toString(16);
					if (i.length < 2) i = '0' + i;
				}
				c[l] = l > 2 ? i / 100 : v > 1 && l ? i + '%' : i;
			}
			return v ? s + '(' + c + ')' : '#' + c.join('');
		}, 
		color   : function (s, v) {
			var c = this.cache,
				p = this.space,
				x = R.length,
				w = x,
				o,
				b,
				f;
			if (s) {
				s = s.toLowerCase();
				b = /a$/.test(s);
				if (b) s = s.slice(0, -1);
			}
			else s = v ? 'rgb' : p;
			if (v) {
				if (type(v) === 'string') {
					v = v.toLowerCase();
					for(; x--;) if (o = R[x].exec(v)) {
						if (x) {
							if (x > 1) {
								s = 'rgb';
								b = o[6];
								v = x > 2 ? [
									parseInt(b ? o[1] + o[2] : o[1] + o[1], 16),
									parseInt(b ? o[3] + o[4] : o[2] + o[2], 16),
									parseInt(b ? o[5] + b    : o[3] + o[3], 16)
								] : [
									b ? o[1] * 2.55 : o[1],
									b ? o[3] * 2.55 : o[3],
									b ? o[5] * 2.55 : o[5],
									o[7] * 100
								];
							}
							else {
								s = 'hsl';
								v = o.slice(1, 5);
								v[3] *= 100;
							}
							break;
						}	
						else {
							v = keywords[v];
							if (v) x = w;
						}
					}
				}
				v = A(slice.call(v), s);
				o = 100;
				if (v.length > s.length) {
					b = +v.pop();
					if (!isNaN(b)) o = b;
				}
				this.alpha = o;
				if (s !== p || '' + v !== '' + c[p]) {
					c = {};
					c[s] = v;
					this.cache = c;
				}
			}
			else {
				if (!c[s]) {
					f = C[p + '2' + s];
					c[s] = A(f ? f(c[p]) : C['rgb2' + s](C[p + '2rgb'](c[p])), s);
				}
				f = slice.call(c[s]);
				if (b) f.push(this.alpha);
			}
			this.space = s;
			return f || this;
		},
		opacity : function (v) {
			return v == null ? this.alpha : this.alpha = V(+v, 2); 
		}
	}
);

cp(
	Color, 
	{
		keywords : K,
		spaces   : S
	}
);

var color = new Color();
console.log(color.css());
console.log(color.css(0, true));
console.log(color.css(1));
console.log(color.css(1, true));
console.log(color.css(2));
console.log(color.css(2, true));

//console.log(C.hwb2rgb([ 240,   0,   0 ]));
//console.log(C.rgb2hwb([   0,   0, 255 ]));	
//console.log(new Color());
//console.log(new Color('#F30'));
//console.log(new Color([ 0, 255, 35 ]));
//console.log(new Color([ 0, 255, 35 , 50], 'hsla'));
//console.log(new Color([ 0, 255, 35 , 50, -10], 'cmyk'));
//console.log(new Color('rgb(100%, 1%, 0%)'));
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
