
define(function () {'use strict';
	
return Number.isNaN = Number.isNaN || function (v) {
	return v !== v;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断指定变量是否是真正的 NaN 。不同于 isNaN 的地方在于本函数不会对被判断的变量做类型转换。
* @see {@link Sumi.Number.isNumber}
* @see {@link Sumi.Object.isNumeric}
* @see {@link external:Number.isFinite}
* @see {@link Sumi.type}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN}
* @access public
* @func external:Number.isNaN
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Number.isNaN(NaN));            // true
* console.log(Number.isNaN(Number.NaN));     // true
* console.log(Number.isNaN(0 / 0));          // true
* console.log(Number.isNaN(1 / 0));          // false
* console.log(Number.isNaN(undefined));      // false
* console.log(Number.isNaN({}));             // false
*/
