
define(function () {
	
return String.prototype.nbmpCharAt = function(idx) {
	var r = '',
		s = this,
		l = s.length,
		u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		x = /[\uD800-\uDBFF]/,
		y = /[\uDC00-\uDFFF]/,
		i = idx >> 0,
		c;
	while(u.exec(s)) {
		if (u.lastIndex - 2 < i) i++;
		else break;
	}
	if(i > 0 && i < l) {
		r += s.charAt(i);
		c = s.charAt(i + 1);
		if(x.test(r) && y.test(c)) {
			r += c;
		}
	}
	return r;
};

});

/**
* 支持非基本多文种平面(non-BMP)字符的 charAt 版本。
* @see {@link external:String#codePointAt}
* @see {@link external:String#nbmpCharCodeAt}
* @see {@link external:String.fromCodePoint}
* @access public
* @func external:String.prototype.nbmpCharAt
* @param {number} [idx = 0] - 字符位置
* @returns {string}
* @example
* console.log('\uD800\uDC00'.nbmpCharAt(0));
* console.log('\uD800\uDC00'.nbmpCharAt(1));
*/
