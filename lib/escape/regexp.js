
define(function () {'use strict';

var r = '[\\$\\(\\)\\*\\+\\.\\[\\]\\?\\\\\/\\^\\{\\}\\|]',
	R = RegExp,
	e = new R(r, 'g'),
	d = new R('\\\\(?=' + r + ')', 'g');

return {
	encode: function(s) {
		return ('' + s).replace(e, '\\$&');
	},
	decode: function(s) {
		return ('' + s).replace(d, '');
	}
};
	
});

/**
* 对正则表达式中的特殊字符做转义处理。
* @see {@link Sumi.Escape.decodeRegExp}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
* @access public
* @func Sumi.Escape.encodeRegExp
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeRegExp('[lodash](https://lodash.com/)'));
* // \[lodash\]\(https:\/\/lodash\.com\/\)
*/

/**
* 对正则表达式的特殊字符做反转义处理。
* @see {@link Sumi.Escape.encodeRegExp}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
* @access public
* @func Sumi.Escape.decodeRegExp
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeRegExp('\[lodash\]\(https:\/\/lodash\.com\/\)'));
* // [lodash](https://lodash.com/)
*/
