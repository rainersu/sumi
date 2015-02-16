
define(
[
	'../../var/fromCC'
]
, function (
	f
) {'use strict';
	
return function () {
	var a = [],
		hs,
		ls,
		i = -1,
		l = arguments.length,
		r = '',
		c;
	while(++i < l) {
		c = Number(arguments[i]);
		if(!isFinite(c) || c < 0 || c > 0x10FFFF || Math.floor(c) != c) {
			throw RangeError('Invalid code point: ' + c);
		}
		if(c <= 0xFFFF) {
			a.push(c);
		}
		else { 
			c -= 0x10000;
			hs = (c >> 10  ) + 0xD800;
			ls = (c % 0x400) + 0xDC00;
			a.push(hs, ls);
		}
		if(i + 1 == l || a.length > 0x4000) {
			r += f.apply(null, a);
			a.length = 0;
		}
	}
	return r;
};

});

/**
* ECMAScript 6 Draft <br>
* 根据指定的代码点序列创建并返回字符串。
* @see {@link external:String#codePointAt}
* @see {@link Sumi.String.nbmpCharCodeAt}
* @see {@link Sumi.String.nbmpCharAt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint}
* @access public
* @func external:String.fromCodePoint
* @param {...number} [num] - 一个或多个代码点
* @returns {string}
* @example
* console.log(String.fromCodePoint(42));                      // "*"
* console.log(String.fromCodePoint(65, 90));                  // "AZ"
* console.log(String.fromCodePoint(0x404));                   // "\u0404"
* console.log(String.fromCodePoint(0x2F804));                 // "\uD87E\uDC04"
* console.log(String.fromCodePoint(194564));                  // "\uD87E\uDC04"
* console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307));  // "\uD834\uDF06a\uD834\uDF07"
*/
