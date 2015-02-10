
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';

return function (v) {
	return type(v) === 'number';
};

});

/**
* 判断指定变量是否是数值类型。
* @see {@link Sumi.Object.isNumeric}
* @see {@link external:Number.isFinite}
* @see {@link external:Number.isNaN}
* @see {@link Sumi.type}
* @access public
* @func Sumi.Number.isNumber
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Sumi.Number.isNumber(NaN));                   // true
* console.log(Sumi.Number.isNumber(Infinity));              // true
* console.log(Sumi.Number.isNumber(.3));                    // true
* console.log(Sumi.Number.isNumber(3.));                    // true
* console.log(Sumi.Number.isNumber(+'3.'));                 // true
* console.log(Sumi.Number.isNumber(+'.3'));                 // true
* console.log(Sumi.Number.isNumber(Number('3.')));          // true
* console.log(Sumi.Number.isNumber(new Number('.3')));      // true
*/
