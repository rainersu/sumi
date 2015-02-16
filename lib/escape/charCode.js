
define(
[
	'../var/concat',
	'../var/fromCC',
	'../var/slice'
]
, function (
	concat,
	fromCC,
	slice
) 
{'use strict';

return {
	strToHex : function () {
		var a = [],
			s = a.join.call(arguments, ''),
			l = s.length,
			u;
		for(; l--;) {
			a[l] = s.charCodeAt(l).toString(16);
		}
		return a;
	},
	hexToStr : function () {
		var a = concat.apply([], slice.call(arguments)),
			l = a.length;
		for(; l--;) {
			a[l] = fromCC(parseInt(a[l], 16));
		}	
		return a.join('');
	}
};

});

/**
* 将字符串逐字符转换成十六进制 Unicode Codepoint 或 Latin-1 character 码值的数组。
* @see {@link Sumi.Escape.hexToStr}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt}
* @access public
* @func Sumi.Escape.strToHex
* @param {...string} str - 输入字符串
* @returns {string[]}
* @example
* console.log(Sumi.Escape.strToHex('中华民国'));         
* // [ '4e2d', '534e', '6c11', '56fd' ]
* @example
* console.log(Sumi.Escape.strToHex('http://me.com'));
// [ '68', '74', '74', '70', '3a', '2f', '2f', '6d', '65', '2e', '63', '6f', '6d' ]
*/

/**
* 从十六进制 Unicode Codepoint 或 Latin-1 character 码值的数组还原出字符串。
* @see {@link Sumi.Escape.strToHex}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt}
* @access public
* @func Sumi.Escape.hexToStr
* @param {array} hex - 十六进制 Unicode Codepoint 或 Latin-1 character 码值的数组
* @returns {string}
* @example
* console.log(Sumi.Escape.hexToStr([ '4e2d', '534e', '6c11', '56fd' ]));
* // 中华民国
* @example
* console.log(Sumi.Escape.hexToStr('68', '74', '74', '70', '3a', '2f', '2f', '6d', '65', '2e', '63', '6f', '6d'));
* // http://me.com
*/