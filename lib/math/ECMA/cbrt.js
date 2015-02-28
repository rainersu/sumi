
define(function () {'use strict';
		
return Math.cbrt = Math.cbrt || function(x) {
    var y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字的立方根。
* @access public
* @func external:Math.cbrt
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.cbrt(-1));    // -1
* console.log(Math.cbrt(0));     //  0
* console.log(Math.cbrt(1));     //  1
* console.log(Math.cbrt(2));     //  1.2599210498948734
*/
