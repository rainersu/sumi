
define(function () {'use strict';

return function (x) {
	if (!x) return 0;
	var n = +x;
	if (n !== n) n = parseFloat(x, 10);
	return ~~n;	 // x | 0 , x >> 0
};

});

/** 
* 将任意变量转换为一个十进制整数。转换失败，{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN NaN} 或 {@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity Infinity} 都会返回为 0 。
* @see {@link Sumi.num}
* @see {@link Sumi.arr}
* @see {@link Sumi.func}
* @access public
* @func Sumi.int
* @param {*} val - 待转换值  
* @returns {number}
* @example
* console.log(Sumi.int());                    // 0
* console.log(Sumi.int(0x32));                // 50
* console.log(Sumi.int(038));                 // 38
* console.log(Sumi.int('.038'));              // 0
* console.log(Sumi.int([]));                  // 0
* console.log(Sumi.int([3]));                 // 3
* console.log(Sumi.int({}));                  // 0
* console.log(Sumi.int(null));                // 0
* console.log(Sumi.int('3px'));               // 3
* console.log(Sumi.int('5%'));                // 5
* console.log(Sumi.int(new Date(2015)));      // 2015
* console.log(Sumi.int(new Date(2015, 3)));   // 1427817600000
* console.log(Sumi.int('.3m'));               // 0
* console.log(Sumi.int('No.3'));              // 0
* console.log(Sumi.int('F4'));                // 0
*/
