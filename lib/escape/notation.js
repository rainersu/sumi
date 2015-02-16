
define(function () {'use strict';
	
return {
	camelCase: function(s) {
		return ('' + s).replace(
			/^-ms-/i, 'ms-'
		).toLowerCase().replace(
			/(^[^a-z0-9-]+|[^a-z0-9]+$)|[^a-z0-9]+([a-z0-9])/ig, 
			function (a, b, c) {
				return b ? '' : c.toUpperCase();
			}
		);
	},
	kebabCase: function(s) {
		return ('' + s).replace(
			/(^[^A-Za-z0-9-]+|[^A-Za-z0-9]+$)|(?:^|[a-z0-9])(?=[A-Z])|([^A-Za-z0-9]+)/g, 
			function (a, b, c) {
				return b ? '' : c ? '-' : a + '-';
			}
		).toLowerCase().replace(
			/^ms-/, '-ms-'
		);
	},
	snakeCase: function(s, b) {
		return ('' + s).replace(
			/(^[^A-Za-z0-9]+|[^A-Za-z0-9]+$)|[a-z0-9](?=[A-Z])|([^A-Za-z0-9]+)/g, 
			function (a, b, c) {
				return b ? '' : c ? '_' : a + '_';
			}
		).toUpperCase();
	}
};

});

/**
* 将字符串转换为蛇形表示法（{@link http://en.wikipedia.org/wiki/Snake_case Snake Case}）的 Javascript 常量名格式。
* @see {@link Sumi.Escape.toCSSProp}
* @see {@link Sumi.Escape.toHTMAttr}
* @access public
* @func Sumi.Escape.toJSConst
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(Sumi.Escape.toJSConst('__proto__'));            //  PROTO
* console.log(Sumi.Escape.toJSConst('MS_BOX_SIZING'));        //  MS_BOX_SIZING
* console.log(Sumi.Escape.toJSConst('ms-box-sizing'));        //  MS_BOX_SIZING
* console.log(Sumi.Escape.toJSConst('boxSizing'));            //  BOX_SIZING
* console.log(Sumi.Escape.toJSConst('MozBoxSizing'));         //  MOZ_BOX_SIZING
*/

/**
* 将字符串转换为驼峰表示法（{@link http://en.wikipedia.org/wiki/CamelCase Camel Case}）的 HTML 属性名称格式。
* @see {@link Sumi.Escape.toCSSProp}
* @see {@link Sumi.Escape.toJSConst}
* @access public
* @func Sumi.Escape.toHTMAttr
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(Sumi.Escape.toHTMAttr('__proto__'));            // proto
* console.log(Sumi.Escape.toHTMAttr('MS_BOX_SIZING'));        // msBoxSizing
* console.log(Sumi.Escape.toHTMAttr('box-sizing'));           // boxSizing
* console.log(Sumi.Escape.toHTMAttr('-moz-box-sizing'));      // MozBoxSizing
* console.log(Sumi.Escape.toHTMAttr('-ms-grid-row-span'));    // msGridRowSpan
*/

/**
* 将字符串转换为烤串表示法（{@link http://en.wikipedia.org/wiki/Letter_case Kebab Case}）的 CSS  属性名称格式。
* @see {@link Sumi.Escape.toHTMAttr}
* @see {@link Sumi.Escape.toJSConst}
* @access public
* @func Sumi.Escape.toCSSProp
* @param {string} str - 文本
* @returns {string}
* @example
* console.log(Sumi.Escape.toCSSProp('ms-box-sizing'));        // -ms-box-sizing
* console.log(Sumi.Escape.toCSSProp('MS_BOX_SIZING'));        // -ms-box-sizing
* console.log(Sumi.Escape.toCSSProp('__proto__'));            //  proto
* console.log(Sumi.Escape.toCSSProp('boxSizing'));            //  box-sizing
* console.log(Sumi.Escape.toCSSProp('MozBoxSizing'));         // -moz-box-sizing
*/
