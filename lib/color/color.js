
define(
[
	'../core/cp',
	'../core/type',
	'../var/slice',
	'../var/hasOP',
	'./conversions/index',
	'./patterns',
	'./keywords',
	'./spaces',
	'./blendings',
	'./filters',
	'./schemas'
]
, function (
	cp,
	type,
	slice,
	hasOP,
	C,
	R,
	K,
	S,
	B,
	F,
	M
) 
{'use strict';

function V (v, t) {
	v = +v;
	return !t ? v : t > 2 ? ((v%= 360) < 0 ? v + 360 : v) : Math.min(t > 1 ? 100 : 255, Math.max(0, v));	
}
function A (v, t) {
	var l = v.length;
	for(t = S[t || 0]; l--;) {
		v[l] = V(v[l], t[l]);
	}
	return v;
}
function J () {
	return this.css(1, 1);
}

function Color (v, s) {
	v = v || [ 0, 0, 0 ];
	return !(this instanceof Color) ? new Color(v, s) : v instanceof Color ? v : this.color(s, v);
}

cp(
	Color.prototype, 
	{
		toJSON     : J,
		toString   : J,
		css        : function (v, b) {
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
			return v ? s + '(' + c + ')' : '#' + c.join('').toUpperCase();
		}, 
		color      : function (s, v) {
			var c = this.cache,
				p = this.space,
				x = R.length,
				w = x,
				o,
				b,
				f;
			if (s) {
				s = s.toLowerCase().replace(/^hsb/, 'hsv');
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
							v = K[v];
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
        websafe    : function () {
			var r = this.color('rgb'),
				l = 3,
				v,
				i,
				n;
			for(; l--;) {
				v = Math.round(r[l]);
				for(i = 0; i < 256; i+= 51) {
					n = i + 51;
					if (v >= i && v <= n) {
						v = v - i > 25 ? n : i;
						break;
					}
				}
				r[l] = v;
			}
			return new Color(r, 'rgb').css();
        },		
		opacity    : function (v, b) {
			return v == null ? this.alpha : this.alpha = V(+v, 2); 
		},	
		blend      : function (c, f) {
			if (f == null) f = 50;
			var n = 'rgba',
				b = this.color(n),
				r = [],
				l = 4,
				t = type(f);
			c = new Color(c).color(n);	
		    if (t === 'number') {
				f/= 100; 
		        var w = f * 2 - 1,
					a = (b[3] - c[3]) / 100,
				x = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
				for(w = 1 - x; l--;) {
					r[l] = l > 2 ? b[l] * f + c[l] * (1 - f) : b[l] * x + c[l] * w;
				}
			}
			else {
				f = t === 'string' ? B[f] : f;
				for(l = 3; l--;) {
					r[l] = f(b[l], c[l]);
				}
			}
			return new Color(r, n);
		},
		filter     : function (f, x, y) {
			return new Color((type(f) === 'string' ? F[f] : f)(this.color('rgba'), x, y));
		},
		complement : function () {
			var n = 'hsla',
				v = this.color(n);
			v[0] = (v[0] + 180) % 360;
			return new Color(v, n);
		},
		schema     : function (f) {
			f = (type(f) === 'string' ? M[f] : f)(this);
			var n = f.pop(),
				l = f.unshift(this.color(n)),
				a = this.alpha;
			for(; l--;) {
				f[l].push(a);
				f[l] = new Color(f[l], n);
			}
			return f;
		} 
	}
);
cp(
	Color,
	{
		keywords     : K,
		spaces       : S,
		GOLDEN_RATIO : 0.618033988749895,   // h+
		eq : function () {
		
		}
	}
);

/*
var c1 = Color('#7DAD18').schema('triad');
var cl = c1.length;
for(; cl--;) console.log(c1[cl].css());
// #AD187D #187DAD #7DAD18
var c1 = Color('#1E8FA8').schema('tetrad');
var cl = c1.length;
for(; cl--;) console.log(c1[cl].css());
// #1EA81E #A88F1E #A81EA8 #1E8FA8
var c1 = Color('#0066FF').schema('splitcomplement');
var cl = c1.length;
for(; cl--;) console.log(c1[cl].css());
// #CCFF00 #CC00FF #0066FF
var c1 = Color('#DA0').schema('analogous');
var cl = c1.length;
for(; cl--;) console.log(c1[cl].css());
// #DD2500 #DD5200 #DD7E00 #DDAA00 #DDD600 #B8DD00 #8BDD00 #DDAA00
var c1 = Color('#0066FF').schema('monochromatic');
var cl = c1.length;
for(; cl--;) console.log(c1[cl].css(1));
// #001433 #002966 #003D99 #0052CC #000000 #0066FF
*/

/*
console.log(Color('green').complement().css());            // #800080
console.log(Color('#4f23a0').filter('sepia').css());       // #584E3D
console.log(Color('#ff0000').filter('invert').css());      // #00FFFF
console.log(Color('#3366CC').filter('greyscale').css());   // #626262
console.log(Color('#660').filter('darken').css());         // #464600
console.log(Color('#660').filter('lighten').css());        // #868620
*/

/*
// http://en.wikipedia.org/wiki/Blend_modes
console.log(Color('#ff0000').blend('#0000ff').css());   
// #800080
console.log(Color('rgba(100,0,0,1.0)').blend('rgba(0,100,0,0.5)', 50).css(1, true));
// rgba(75, 25, 0, 0.75)
var c1 = new Color('#aabbcc');
var c2 = new Color('#333333');
console.log(c1.blend(c2).css());                   // #6F7780
console.log(c1.blend(c2, 'combine'    ).css());    // #9988ff
console.log(c1.blend(c2, 'subtractive').css());    // #000000
console.log(c1.blend(c2, 'multiply'    ).css());   // #222529
console.log(c1.blend(c2, 'screen'      ).css());   // #BCC9D7
console.log(c1.blend(c2, 'overlay'     ).css());   // #7792AD
console.log(c1.blend(c2, 'dodge'       ).css());   // #9AC0FF
console.log(c1.blend(c2, 'burn'        ).css());   // #000000
console.log(c1.blend(c2, 'negate'      ).css());   // #DDEEFF
console.log(c1.blend(c2, 'darken'      ).css());   // #333333
console.log(c1.blend(c2, 'lighten'     ).css());   // #AABBCC
console.log(c1.blend(c2, 'addition'    ).css());   // #DDEEFF
console.log(c1.blend(c2, 'subtract'    ).css());   // #778899
console.log(c1.blend(c2, 'difference'  ).css());   // #778899
*/

return Color;

});

/**
* 色彩类型。
* @class Sumi.Color
* @see {@link http://en.wikipedia.org/wiki/Color_space}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
* @see {@link https://github.com/harthur/color-convert}
* @see {@link https://github.com/avp/spectra}
* @see {@link https://github.com/shazow/colorlib}
*/
	