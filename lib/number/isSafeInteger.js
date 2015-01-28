
define([
	'./isInteger',
	'../var/maxint'
], function (I, S) {
	
return Number.isSafeInteger = Number.isSafeInteger || function(v) {
	return I(v) && v >= -S && v <= S;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断指定变量是否是安全的整数。
* @see {@link external:Number.isInteger}
* @access public
* @func external:Number.isSafeInteger
* @param {*} val - 任意值
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
