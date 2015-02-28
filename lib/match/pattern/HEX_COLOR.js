
define({
	name   : 'HEX_COLOR',
	keys   : 6,
	pattern: '#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])(?:([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9]))?',
	parser : function (o) {'use strict';
		var f = o[6] !== undefined,
			r = f ? o[1] + o[2] : o[1] + o[1],
			g = f ? o[3] + o[4] : o[2] + o[2],
			b = f ? o[5] + o[6] : o[3] + o[3],
			p = parseInt;
		return {
			red  : p(r, 16),
			green: p(g, 16),
			blue : p(b, 16),
			alpha: 1,
			match: o.match
		};
	}
});

/**
* 处理 {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value 十六进制 RGB 格式色彩值} 的正则表达式模板。
* @see {@link Sumi.Pattern.RGBA_COLOR}
* @see {@link Sumi.Pattern.HSLA_COLOR}
* @var {Sumi.Match} Sumi.Pattern.HEX_COLOR
* @example
* var match = Sumi.Pattern.HEX_COLOR;
* 
* console.log(match.parse('#F03'));
* // [ { red: 255, green: 0, blue: 51, alpha: 1, match: '#F03' } ]
* 
* console.log(match.parse('#FF0033'));
* // [ { red: 255, green: 0, blue: 51, alpha: 1, match: '#FF0033' } ]
* 
* console.log(match.is('#H03'));   // false
* console.log(match.is('#f03'));   // true
*/