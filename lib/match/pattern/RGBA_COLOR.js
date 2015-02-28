
define({
	name   : 'RGBA_COLOR',
	pattern: 'rgba?\\(\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*,\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*,\\s*(\\d+(?:\\.\\d+)?)(\\%?)\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)',
	keys   : 'r,p,g,p,b,p,a',
	parser : function (o) {'use strict';
		return {
			red  : o.p ? o.r * 2.55 : +o.r,
			green: o.p ? o.g * 2.55 : +o.g,
			blue : o.p ? o.b * 2.55 : +o.b,
			alpha: o.a == null  ? 1 : +o.a,
			match: o.match
		};
	}
});

/**
* 处理 {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value RGB 格式色彩值} 的正则表达式模板。
* @see {@link Sumi.Pattern.HEX_COLOR}
* @see {@link Sumi.Pattern.HSLA_COLOR}
* @var {Sumi.Match} Sumi.Pattern.RGBA_COLOR
* @example
* var match = Sumi.Pattern.RGBA_COLOR;
*  
* console.log(match.parse('rgb(5, 30, 255)'));
* // [ { blue: 255, green: 30, red: 5, alpha: 1, match: 'rgb(5, 30, 255)' } ]
* 
* console.log(match.parse('rgb(100%, 3%, 20%)'));
* // [ { blue: 51, green: 7.6499999999999995, red: 254.99999999999997, alpha: 1, match: 'rgb(100%, 3%, 20%)' } ]
* 
* console.log(match.parse('rgba(5, 30, 255, 0.1)'));
* // [ { alpha: 0.1, blue: 255, green: 30, red: 5, match: 'rgba(5, 30, 255, 0.1)' } ]
* 
* console.log(match.parse('rgba(100%, 3%, 20%, 0.1)'));
* // [ { alpha: 0.1, blue: 51, green: 7.6499999999999995, red: 254.99999999999997, match: 'rgba(100%, 3%, 20%, 0.1)' } ]
*/
