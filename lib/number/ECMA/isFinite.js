
define(
[
	'../isNumber'
]
, function (
	isNumber
) 
{'use strict';
	
return Number.isFinite = Number.isFinite || function (v) {
	return isNumber(v) && isFinite(v);
};

});

/**
* ECMAScript 6 Draft <br>
* 判断指定变量是否是有限的数值。
* @see {@link Sumi.Number.isNumber}
* @see {@link Sumi.Object.isNumeric}
* @see {@link external:Number.isNaN}
* @see {@link Sumi.type}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite}
* @access public
* @func external:Number.isFinite
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Number.isFinite(.1));                   // true
* console.log(Number.isFinite(NaN));                  // false
* console.log(Number.isFinite(0 / 0));                // false
* console.log(Number.isFinite(1 / 0));                // false
* console.log(Number.isFinite(Infinity));             // false
* console.log(Number.isFinite(Number.MAX_VALUE));     // true
*/
