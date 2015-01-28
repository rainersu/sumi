	
define(function () {
	
return String.prototype.nbmpCharCodeAt = function(idx) {
	var s = this,
		i = idx >> 0,
		c = s.charCodeAt(i),
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
* 支持非基本多文种平面(non-BMP)字符的 charCodeAt 版本。也即 {@link String#codePointAt codePointAt} 的非ES6版本。
* @see {@link external:String#codePointAt}
* @see {@link external:String#nbmpCharAt}
* @see {@link external:String.fromCodePoint}
* @access public
* @func external:String.prototype.nbmpCharCodeAt
* @param {number} [idx = 0] - 字符位置
* @returns {number}
* @example
* console.log('ABC'.nbmpCharCodeAt(1));          // 66
* console.log('\uD800\uDC00'.nbmpCharCodeAt(0)); // 65536
* console.log('XYZ'.nbmpCharCodeAt(42));         // undefined	
*/
