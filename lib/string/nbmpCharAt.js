
define(function () {'use strict';
	
return function(s, i) {
	s = '' + s;
	i = i >> 0;
	var r = '',
		l = s.length,
		u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		x = /[\uD800-\uDBFF]/,
		y = /[\uDC00-\uDFFF]/,
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
* @see {@link external:String.fromCodePoint}
* @see {@link Sumi.String.nbmpCharCodeAt}
* @access public
* @func Sumi.String.nbmpCharAt
* @param {number} [idx=0] - 字符位置
* @returns {string}
* @example
* console.log(Sumi.String.nbmpCharAt('\uD800\uDC00', 0));
* console.log(Sumi.String.nbmpCharAt('\uD800\uDC00', 1));
*/
