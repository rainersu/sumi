
define(function () {
	
return Math.factorial = function(int) {
	var r = 1,
		i = int >>> 0;
	while(i > 1) {
		r*= i--;
	}
	return r;
};

});

/**
* 计算阶乘值。
* @access public
* @func external:Math.factorial
* @param {number} int - 要计算阶乘的自然数
* @returns {number}
* @example
* console.log(Math.factorial(0));                      // 1
* console.log(Math.factorial(1));                      // 1
* console.log(Math.factorial(3));                      // 6
*/
