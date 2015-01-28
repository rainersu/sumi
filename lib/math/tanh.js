
define(function () {
	
return Math.tanh = Math.tanh || function(x) {
	var i = 1 / 0,
		e = Math.exp;
	return x === i ? 1 : x === -i ? -1 : (e(x) - e(-x)) / (e(x) + e(-x));
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字的双曲正切值。
* @see {@link external:Math.acosh}
* @see {@link external:Math.asinh}
* @see {@link external:Math.atanh}
* @see {@link external:Math.cosh}
* @see {@link external:Math.sinh}
* @access public
* @func external:Math.tanh
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.tanh(0));                           // 0
* console.log(Math.tanh(Infinity));                    // 1
* console.log(Math.tanh(1));                           // 0.7615941559557649
*/
