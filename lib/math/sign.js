
define(function () {
	
return Math.sign = Math.sign || function(x) {
    x = +x;
	return x === 0 || isNaN(x) ? x : x > 0 ? 1 : -1;
};

});

/**
* ECMAScript 6 Draft <br>
* 获取数值是正数、负数、0 还是非数字。
* @access public
* @func external:Math.sign
* @param {number} x - 数字
* @returns {number} 1（正数） | -1（负数） | 0 | -0 | NaN（非数字）
* @example
* console.log(Math.sign(3));                           //   1
* console.log(Math.sign(-12e2));                       //  -1
* console.log(Math.sign('3'));                         //   1
* console.log(Math.sign('3px'));                       // NaN
*/
