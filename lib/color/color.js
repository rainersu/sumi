
define(
[
	'../core/cp',
	'../core/type',
	'../var/slice',
	'./keywords',
	'./conversions'
]
, function (
	cp,
	type,
	slice,
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
	K = 'hrgbslvwbcmyka';

function V(v, t) {
	v = +v;
	t = t ? K.indexOf(t) : -1;
	return t < 0 ? v : !t ? ((v > 360 || v < -360 ? v %= 360 : v) < 0 ? v + 360 : v) : Math.min(t > 3 ? 100 : 255, Math.max(0, v));	
}
function A(v, t) {
	var l = t.length,
		i;
	for(; l--;) {
		v[l] = V(v[l], t.charAt(l));
	}
	return v;
}
	
function Color (v, s) {
	if (!(this instanceof Color)) return new Color(v);
	s = s ? s.toLowerCase() : 'rgb';
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
		c = v ? slice.call(v) : [ 0, 0, 0 ];
	}
	x = c.length;
	w = s.length;
	c = A(c,  s);
	o = 100;
	if (x > w) {
		m = +c.pop();
		if (!isNaN(m)) o = V(m);
	}
	this.alpha = o;
	this.color = c;
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

console.log(new Color());
console.log(new Color('#F30'));
console.log(new Color([ 0, 255, 35 ]));
console.log(new Color([ 0, 255, 35 , 50], 'rgb'));
console.log(new Color('rgb(5, 30, 255)'));
console.log(new Color('rgb(100%, 1%, 20%)'));
console.log(new Color('hsla(240, 100%, 50%, 0.05)'));
console.log(new Color('rebeccapurple'));

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
