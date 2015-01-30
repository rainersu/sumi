
define(function () {

var d = {},
	e = {},
	a = '#39=\',#96=`,gt=>,lt=<,amp=&,quot=",nbsp= '.split(','),
	l = a.length - 1,
	v;
	
for(; l >= 0; l--) {
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
* 编码字符串中的 HTML 命名实体（Named Character Entities）。
* @see {@link esc.decodeNCE}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent}
* @access public
* @func esc.encodeNCE
* @param {string} str - 要编码的字符串
* @returns {string}
* @example
* console.log(esc.encodeNCE('<input title="Hi, Girl">'));  // &lt;input&nbsp;title=&quot;Hi,&nbsp;Girl&quot;&gt;
*/

/**
* 解码字符串中的 HTML 命名实体（Named Character Entities）。
* @see {@link esc.encodeNCE}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent}
* @access public
* @func esc.decodeNCE
* @param {string} str - 要解码的字符串
* @returns {string}
* @example
* console.log(esc.decodeNCE('&lt;input&nbsp;title=&quot;Hi,&nbsp;Girl&quot;&gt;'));  // <input title="Hi, Girl">
*/
