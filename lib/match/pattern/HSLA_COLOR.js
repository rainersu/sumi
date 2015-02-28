
define({
	name   : 'HSLA_COLOR',
	keys   : 'h,s,l,a',
	pattern: 'hsla?\\(\\s*(\\d+(?:\\.\\d+)?)\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*,\\s*(\\d+(?:\\.\\d+)?)\\%\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)',
	parser : function (o) {'use strict';
		return {
			hue       : +o.h,
			saturation: o.s / 100,
			lightness : o.l / 100,
			alpha     : o.a == null ? 1 : +o.a,
			match     : o.match
		};
	}
});

/**
* 处理 {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value HSLA 格式色彩值} 的正则表达式模板。
* @see {@link Sumi.Pattern.HEX_COLOR}
* @see {@link Sumi.Pattern.RGBA_COLOR}
* @var {Sumi.Match} Sumi.Pattern.HSLA_COLOR
* @example
* var match = Sumi.Pattern.HSLA_COLOR;
*  
* console.log(match.parse('hsl(120, 100%, 50%)'));
* // [ { lightness: 0.5, saturation: 1, hue: 120, alpha: 1, match: 'hsl(120, 100%, 50%)' } ]
* 
* console.log(match.parse('hsla(240, 100%, 50%, 0.05)'));
* // [ { alpha: 0.05, lightness: 0.5, saturation: 1, hue: 240, match: 'hsla(240, 100%, 50%, 0.05)' } ]
*/
