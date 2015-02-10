
define(function () {'use strict';
	
return {
	camelCase: function(s) {
		return ('' + s).replace(/^-ms-/, 'ms-').replace(/\W+([a-z])/ig, function (a, b) {
			return b.toUpperCase();
		});
	},
	kebabCase: function(s) {
		return ('' + s).replace(/(?:\b|[a-z0-9])(?=[A-Z])/g, '$&-').toLowerCase();	
	}
};

});

/**
* 将样式表属性名称转换为驼峰表示法（Camel Case）的 HTML 属性名称格式。
* @see {@link Sumi.Escape.toCSSProp}
* @access public
* @func Sumi.Escape.toHTMAttr
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(Sumi.Escape.toHTMAttr('box-sizing'));       // boxSizing
* console.log(Sumi.Escape.toHTMAttr('-moz-box-sizing'));  // MozBoxSizing
* console.log(Sumi.Escape.toHTMAttr('-ms-grid-row-span'));  // msGridRowSpan
*/

/**
* 将HTML 属性名称转换为烤串表示法（Kebab Case）的 CSS  属性名称格式。
* @see {@link Sumi.Escape.toHTMAttr}
* @access public
* @func Sumi.Escape.toCSSProp
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(Sumi.Escape.toCSSProp('boxSizing'));        // box-sizing
* console.log(Sumi.Escape.toCSSProp('MozBoxSizing'));     // -moz-box-sizing
*/
