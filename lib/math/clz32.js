	
define(function () {
	
return Math.clz32 = Math.clz32 || function(x) {
    return (x = x >>> 0) ? 32 - x.toString(2).length : 32;
};

});

/**
* ECMAScript 6 Draft <br>
* 计算一个数字在32位无符号位整形数字的二进制形式开头有多少个 0 。
* @access public
* @func external:Math.clz32
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.clz32(1));                          // 31
* console.log(Math.clz32(1000));                       // 22 
* console.log(Math.clz32());                           // 32
* console.log([NaN, Infinity, -Infinity, 0, -0, null, undefined, "foo", {}, []].filter(function(n) {
*     return Math.clz32(n) !== 32
* }));                                                 // []
* console.log(Math.clz32(true));                       // 31
* console.log(Math.clz32(3.5));                        // 30
*/
