
define(
[
	'./isInteger',
	'./MAX_SAFE_INTEGER'
]
, function (
	isInteger, 
	MAX_SAFE_INTEGER
) 
{'use strict';
	
return Number.isSafeInteger = Number.isSafeInteger || function (v) {
	return isInteger(v) && v >= -MAX_SAFE_INTEGER && v <= MAX_SAFE_INTEGER;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断指定变量是否是安全的整数。
* @see {@link external:Number.isInteger}
* @see {@link external:Number.isSafeInteger}
* @see {@link external:Number.isFinite}
* @see {@link Sumi.type}
* @access public
* @func external:Number.isSafeInteger
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Number.isSafeInteger(3));                    // true
* console.log(Number.isSafeInteger(Math.pow(2, 53)));      // false
* console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));  // true
* console.log(Number.isSafeInteger(NaN));                  // false
* console.log(Number.isSafeInteger(Infinity));             // false
* console.log(Number.isSafeInteger('3'));                  // false
* console.log(Number.isSafeInteger(3.1));                  // false
* console.log(Number.isSafeInteger(3.0));                  // true
*/
