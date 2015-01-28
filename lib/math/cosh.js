	
define(function () {
	
return Math.cosh = Math.cosh || function(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字的双曲余弦值。
* @see {@link external:Math.acosh}
* @see {@link external:Math.asinh}
* @see {@link external:Math.atanh}
* @see {@link external:Math.tanh}
* @see {@link external:Math.sinh}
* @access public
* @func external:Math.cosh
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.cosh(0));                           // 1
* console.log(Math.cosh(1));                           // 1.5430806348152437
* console.log(Math.cosh(-1));                          // 1.5430806348152437
*/
