
define(
[
	'../core/cp',
	'../core/type',
	'./keywords',
	'./conversions'
]
, function (
	cp,
	type,
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
	M = Math,
	P = parseInt,
	K = function (v, t) {
		return M.min(t > 1 ? 360 : t ? 100 : 255, M.max(0, M.round(+v)));
	};
	
function Color (s) {
	if (!(this instanceof Color)) return new Color(s);
	var c = {},
		a = arguments,
		x = R.length,
		w = x,
		o,
		m;
	if (s) {
		m = type(s);
		if (m === 'string') {
			s = s.toLowerCase();
			for(; x--;) if (o = R[x].exec(s)) {
				if (x) {
					m = o[6];
					c = x > 2 ? {
						r : K(P(m ? o[1] + o[2] : o[1] + o[1], 16)),
						g : K(P(m ? o[3] + o[4] : o[2] + o[2], 16)),
						b : K(P(m ? o[5] + m    : o[3] + o[3], 16))
					} : x > 1 ? {
						r : K(m ? o[1] * 2.55 : o[1]),
						g : K(m ? o[3] * 2.55 : o[3]),
						b : K(m ? o[5] * 2.55 : o[5]),
						a : K(o[7] * 100, 1)
					} : {
						h : K(o[1], 2),
						s : K(o[2], 1),
						l : K(o[3], 1),
						a : K(o[4] * 100, 1)
					}
					break;
				}
				else {
					s = keywords[s];
					if (s) x = w;
				}
			}
		}
		else if (m === 'object') {
			cp(c, s instanceof Color ? s.cache : s);
		}
	}
	if (!('t' in c)) c.t = 'h' in c;
	this.cache = c;
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
//console.log(new Color('rebeccapurple'));
//console.log(new Color('rgba(5, 30, 255, 0.1)'));
//console.log(new Color('hsla(240, 100%, 50%, 0.05)'));

//console.log(new Color('#FF0033'));
//console.log(new Color('rgb(5, 30, 255)'));
//console.log(new Color('rgb(100%, 1%, 20%)'));
//console.log(new Color('rgba(5, 30, 255, 0.1)'));
//console.log(new Color('hsl(120, 100%, 50%)'));
//console.log(new Color('hsla(240, 100%, 50%, 0.05)'));
//console.log(new Color('rebeccapurple'));
//console.log(new Color('black'));

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
