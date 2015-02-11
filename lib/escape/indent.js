
define(function () {

function r (s) {
	return s.replace(/^[\f\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000\uFEFF\xA0]+/mg, '');
}

return {
	insert: function (s, w) {
		return r(s).replace(/^/mg, w || '\u3000\u3000');
	},
	remove: r
};

});

/**
* 给字符串插入每行行首缩进。
* @see {@link Sumi.Escape.removeIndents}
* @access public
* @func Sumi.Escape.insertIndents
* @param {string} str - 字符串
* @param {string} [indentStr=\u3000\u3000] - 每行字符数
* @returns {string}
* @example
* var x = Sumi.Escape.insertIndents('中华\r\n民国');
* console.log(x);                    
* // 　　中华
* // 　　民国
*/

/**
* 移除字符串中每行行首缩进。
* @see {@link Sumi.Escape.insertIndents}
* @access public
* @func Sumi.Escape.removeIndents
* @param {string} - 字符串
* @returns {string}
* @example
* var y = Sumi.Escape.removeIndents('　　中华\r\n　　民国');
* console.log(y);                    
* // 中华
* // 民国
*/
