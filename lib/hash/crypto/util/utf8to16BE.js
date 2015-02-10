
define(function () {'use strict';

return function (i) {
	var o = '',
		n = 0,
		l = i.length,
		x;
	for(; n < l; n++) {
		x = i.charCodeAt(n);
		o+= String.fromCharCode((x >>> 8) & 0xFF, x & 0xFF);
	}
	return o;
};

});

/**
* 将 UTF-8 字符串转换为大端序 UTF-16 编码。
* @see {@link Sumi.Escape.utf16to8}
* @see {@link Sumi.Escape.utf8to16LE}
* @access public
* @func Sumi.Escape.utf8to16BE
* @param {string} str - UTF-8 字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.utf8to16BE('中华民国'));
*/
