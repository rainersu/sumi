
define(function () {'use strict';

return function (i) {
	var o = '',
		n = 0,
		l = i.length,
		x;
	for(; n < l; n++) {
		x = i.charCodeAt(n);
		o+= String.fromCharCode(x & 0xFF, (x >>> 8) & 0xFF);
	}
	return o;
};

});

/**
* 将 UTF-8 字符串转换为小端序 UTF-16 编码。
* @see {@link Sumi.Escape.utf16to8}
* @see {@link Sumi.Escape.utf8to16BE}
* @access public
* @func Sumi.Escape.utf8to16LE
* @param {string} str - UTF-8 字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.utf8to16LE('中华民国'));
*/
