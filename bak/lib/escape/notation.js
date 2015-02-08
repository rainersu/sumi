
define(function () {
	
return {
	camelCase: function (s) {
		return ('' + s).replace(/\W+([a-z])/ig, function (a, b) {
			return b.toUpperCase();
		});
	},
	kebabCase: function (s) {
		return ('' + s).replace(/(?:\b|[a-z0-9])(?=[A-Z])/g, '$&-').toLowerCase();	
	}
};

});

/**
* 将样式表属性名称转换为驼峰表示法（Camel Case）的 HTML 属性名称格式。
* @see {@link Escape.toCSSProp}
* @access public
* @func Escape.toHTMAttr
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(Escape.toHTMAttr('box-sizing'));       // boxSizing
* console.log(Escape.toHTMAttr('-moz-box-sizing'));  // MozBoxSizing
*/

/**
* 将HTML 属性名称转换为烤串表示法（Kebab Case）的 CSS  属性名称格式。
* @see {@link Escape.toHTMAttr}
* @access public
* @func Escape.toCSSProp
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(Escape.toCSSProp('boxSizing'));        // box-sizing
* console.log(Escape.toCSSProp('MozBoxSizing'));     // -moz-box-sizing
*/
