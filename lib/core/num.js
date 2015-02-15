
define(
[
	'./type'
]
, function (
	type
) 
{'use strict';

return function (x) {
	if (!x) return 0;
	var n =  +x;
	if (n !== n) n = parseFloat(x);
	if (n !== n) n = n | 0;
	return n || 0;
};

});

/** 
* 将任意变量转换为一个数字。转换失败，{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN NaN} 或 {@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity Infinity} 都会返回为 0 。
* @see {@link Sumi.int}
* @see {@link Sumi.arr}
* @see {@link Sumi.func}
* @access public
* @func Sumi.num
* @param {*} val - 如果是一个数字，则直接返回。否则将尝试转换。如果失败则返回 0 而非 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN NaN} 或 {@link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity Infinity} 
* @returns {number}
* @example
* console.log(Sumi.num());                    // 0
* console.log(Sumi.num(0x32));                // 50
* console.log(Sumi.num(038));                 // 38
* console.log(Sumi.num('.038'));              // 0.038
* console.log(Sumi.num([]));                  // 0
* console.log(Sumi.num([3]));                 // 3
* console.log(Sumi.num({}));                  // 0
* console.log(Sumi.num(null));                // 0
* console.log(Sumi.num('3px'));               // 3
* console.log(Sumi.num('5%'));                // 5
* console.log(Sumi.num(new Date(2015)));      // 2015
* console.log(Sumi.num(new Date(2015, 3)));   // 1427817600000
* console.log(Sumi.num('.3m'));               // 0.3
* console.log(Sumi.num('No.3'));              // 0
* console.log(Sumi.num('F4'));                // 0
*/
