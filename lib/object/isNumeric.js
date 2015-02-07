
define(
[
	'../array/ECMA/isArray'
]
, function (
	isArray
) 
{'use strict';

return function (v) {
	return !isArray(v) && (v - parseFloat(v) + 1) >= 0;
};

});

/**
* 判断指定变量是否是数字格式的值。
* @see {@link Sumi.Number.isNumber}
* @see {@link external:Number.isFinite}
* @see {@link external:Number.isNaN}
* @see {@link Sumi.Core.type}
* @access public
* @func Sumi.Object.isNumeric
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Object.isNumeric(+300.));        // true
* console.log(Sumi.Object.isNumeric(-.300));        // true
* console.log(Sumi.Object.isNumeric('+3.'));        // true
* console.log(Sumi.Object.isNumeric('-.3'));        // true
* console.log(Sumi.Object.isNumeric(-0xFF));        // true
* console.log(Sumi.Object.isNumeric('0xFF'));       // true
* console.log(Sumi.Object.isNumeric('8e5'));        // true
* console.log(Sumi.Object.isNumeric(3.1415));       // true
* console.log(Sumi.Object.isNumeric(0144));         // true
* console.log(Sumi.Object.isNumeric('3px'));        // false
* console.log(Sumi.Object.isNumeric(new Date()));   // false
* console.log(Sumi.Object.isNumeric(''));           // false
* console.log(Sumi.Object.isNumeric([]));           // false
* console.log(Sumi.Object.isNumeric({}));           // false
* console.log(Sumi.Object.isNumeric(NaN));          // false
* console.log(Sumi.Object.isNumeric(null));         // false
* console.log(Sumi.Object.isNumeric(true));         // false
* console.log(Sumi.Object.isNumeric(Infinity));     // false
* console.log(Sumi.Object.isNumeric(undefined));    // false
*/
