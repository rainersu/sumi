
define(function () {'use strict';

return function (a, b) {
	return a === 0 && b === 0 ? 1 / a === 1 / b : a !== a ? b !== b : a === b;
};

});	

/**
* ECMAScript 6 Draft <br>
* 判断两个值是否是同一个值。
* @see {@link Sumi.Core.eq}
* @access public
* @func external:Object.is
* @param {*} v1 - 第一个要比较的变量
* @param {*} v2 - 第二个要比较的变量
* @returns {boolean}
* @example
* console.log(Object.is('foo', 'foo'));     // true
* console.log(Object.is([], []));           // false
* console.log(Object.is(null, null));       // true
* console.log(Object.is(0, -0));            // false
* console.log(Object.is(-0, -0));           // true
* console.log(Object.is(NaN, 0/0));         // true
* console.log(Object.is(NaN, NaN));         // true
*/
