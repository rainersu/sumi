
define(function () {'use strict';

var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

return function (u, b) {
	b = b || '';
	var l = u.length,
		x = l * 8,
		o = '',
		i = 0,
		j,
		t;
	for(; i < l; i+= 3) {
		t = (u.charCodeAt(i) << 16) | (i + 1 < l ? u.charCodeAt(i + 1) << 8 : 0) | (i + 2 < l ? u.charCodeAt(i + 2) : 0);
		for(j = 0; j < 4; j++) {
			o+= i * 8 + j * 6 > x ? b : a.charAt((t >>> 6 * (3 - j)) & 0x3F);
		}
	}
	return o;
};

});

/**
* 将原始字符串 (Raw String) 转换为 {@link http://zh.wikipedia.org/wiki/Base64 Base64} 编码字符串。
* @see {@link Sumi.Escape.rawToHex}
* @access public
* @func Sumi.Escape.rawToBase64
* @param {string} str - 原始字符串
* @param {string} [b64pad=''] - 指定 base-64 编码格式填充字符。"=" 则严格遵守 RFC 文档。默认值为空
* @returns {string}
* @example
* console.log(Sumi.Escape.rawToBase64('google.com'));
*/
