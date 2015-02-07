
define(function () {'use strict';
	
return function(x) {
    return Math.exp(x) - 1;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算自然对数的指定次幂减一。
* @access public
* @func external:Math.expm1
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.expm1(-1));    // -0.6321205588285577 
* console.log(Math.expm1(0));     // 0
* console.log(Math.expm1(1));     // 1.718281828459045
*/
