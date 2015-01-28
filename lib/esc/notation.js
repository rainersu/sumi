
define(function () {
	
return {
	toHTMAttr: function (s) {
		return ('' + s).replace(/\W+([a-z])/ig, function (a, b) {
			return b.toUpperCase();
		});
	},
	toCSSProp: function (s) {
		return ('' + s).replace(/(?:\b|[a-z0-9])(?=[A-Z])/g, '$&-').toLowerCase();	
	}
};

});

/**
* 将样式表属性名称转换为驼峰表示法（Camel Case）的 HTML 属性名称格式。
* @see {@link esc.toCSSProp}
* @access public
* @func esc.toHTMAttr
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(esc.toHTMAttr('box-sizing'));       // boxSizing
* console.log(esc.toHTMAttr('-moz-box-sizing'));  // MozBoxSizing
*/

/**
* 将HTML 属性名称转换为烤串表示法（kebab Case）的 CSS  属性名称格式。
* @see {@link esc.toHTMAttr}
* @access public
* @func esc.toCSSProp
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(esc.toCSSProp('boxSizing'));        // box-sizing
* console.log(esc.toCSSProp('MozBoxSizing'));     // -moz-box-sizing
*/
