	
define(function () {'use strict';
	
return function(s, i) {
	s = '' + s;
	i = i >> 0;
	var c = s.charCodeAt(i),
		h, 
		l;
	if(0xD800 <= c && c <= 0xDBFF) {
		h = c;
		l = s.charCodeAt(i + 1);
		return isNaN(l) ? NaN : ((h - 0xD800) * 0x400) + (l - 0xDC00) + 0x10000;
	}
	if(0xDC00 <= c && c <= 0xDFFF) {
		return NaN;
	}
	return c;
};

});

/**
* 支持非基本多文种平面(non-BMP)字符的 charCodeAt 版本。也即 {@link external:String#codePointAt|codePointAt} 的非 ES6 版本。
* @see {@link external:String#codePointAt}
* @see {@link external:String.fromCodePoint}
* @see {@link Sumi.String.nbmpCharAt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt}
* @access public
* @func Sumi.String.nbmpCharCodeAt
* @param {number} [idx=0] - 字符位置
* @returns {number}
* @example
* console.log(Sumi.String.nbmpCharCodeAt('ABC', 1));            // 66
* console.log(Sumi.String.nbmpCharCodeAt('\uD800\uDC00', 0));   // 65536
* console.log(Sumi.String.nbmpCharCodeAt('XYZ', 42));           // NaN	
*/
