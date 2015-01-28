
define([
	'./isInteger'
], function (I) {
	
return Number.isOdd = function(val) {
		var v = +val;
		return Number.isInteger(v) && !!(v % 2);
	}

});

/**
* 判断指定变量是否是奇数。
* @see {@link external:Number.isEven}
* @access public
* @func external:Number.isOdd
* @param {number} val - 要检测的数值
* @returns {boolean}
* @example
* console.log(Number.isOdd(0));                            // false
* console.log(Number.isOdd(1));                            // true
* console.log(Number.isOdd(2));                            // false
* console.log(Number.isOdd(3));                            // true
* console.log(Number.isOdd(4));                            // false
* console.log(Number.isOdd(5));                            // true
*/ 
