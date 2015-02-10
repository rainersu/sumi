
define(function () {'use strict';

return function (t, x) {
	var l = t.length,
		h = x ? "0123456789ABCDEF" : "0123456789abcdef",
		o = "",
		x,
		i = 0;
	for(; i < l; i++) {
		x = t.charCodeAt(i);
		o+= h.charAt((x >>> 4) & 0x0F) + h.charAt(x & 0x0F);
	}
	return o;
};

});

/**
* 将原始字符串 (Raw String) 转换为十六进制编码字符串。
* @see {@link Sumi.Escape.rawToBase64}
* @access public
* @func Sumi.Escape.rawToHex
* @param {string} str - 原始字符串
* @param {boolean} [hexcase=false] - 指定十六进制编码字符格式
* @param {boolean}  hexcase.true  - 使用大写字母
* @param {boolean}  hexcase.false - 使用小写字母
* @returns {string}
* @example
* console.log(Sumi.Escape.rawToHex('google.com', true));
*/
