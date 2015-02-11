
define(function () {'use strict';

var d = {},
	e = {},
	a = '#39=\',#96=`,gt=>,lt=<,amp=&,quot=",nbsp= '.split(','),
	l = a.length,
	v;
	
for(; l--;) {
	v = a[l].split('=');
	d[v[0]] = v[1];
	e[v[1]] = v[0];
}

return {
	decode: function(s) {
		return ('' + s).replace(/&([^&;]+);/g, function(a, b) {
			return d[b] || a;
		});
	},
	encode: function(s) {
		return ('' + s).replace(/[><&" ]/g,    function(a, b) {
			return '&' + e[a] + ';';
		});
	}
};

});

/**
* 将 HTML 中的特殊字符使用命名实体（Named Character Entities）替代。
* @see {@link Sumi.Escape.decodeHTML}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent}
* @access public
* @func Sumi.Escape.encodeHTML
* @param {string} str - 要编码的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeHTML('<input title="Hi, Girl">'));  
* // &lt;input&nbsp;title=&quot;Hi,&nbsp;Girl&quot;&gt;
*/

/**
* 还原 HTML 中用命名实体（Named Character Entities）替代的特殊字符。
* @see {@link Sumi.Escape.encodeHTML}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent}
* @access public
* @func Sumi.Escape.decodeHTML
* @param {string} str - 要解码的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.decodeHTML('&lt;input&nbsp;title=&quot;Hi,&nbsp;Girl&quot;&gt;'));  
* // <input title="Hi, Girl">
*/
