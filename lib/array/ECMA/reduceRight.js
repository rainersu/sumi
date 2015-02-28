
define(function () {'use strict';

return Array.prototype.reduceRight = Array.prototype.reduceRight || function (f, t) {
	var o = Object(this), 
		l = o.length >>> 0, 
		b = 1 < arguments.length, 
		v = b ? t : undefined;
	for(; l--;) if(l in o) {
		if(b) {
			v = f(v, o[l], l, o);
		}
		else {
			v = o[l];
			b = true;
		}
	}
	return v;	
};

});

/**
* ECMAScript 5.1 Standard <br>
* 按降序顺序对数组中的所有元素调用指定的回调函数。 该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。
* @see {@link external:Array#map}
* @see {@link external:Array#reduce}
* @access public
* @func external:Array.prototype.reduceRight
* @param {external:Array~reduceCallback} cb - 回调函数
* @param {*} [iv] - 用作来启动累积初始值。 第一次调用回调函数会将此值作为参数而非数组值提供
* @returns {*} 通过最后一次调用回调函数获得的累积结果。
* @example
* console.log([0, 1, 2, 3, 4].reduceRight(function(prev, curr) {
*     return prev + curr;
* }));        // 10
* 
* console.log(Array.prototype.reduceRight.call('abc', function(pv, cv) {
*     return pv + (pv ? '-' : '') + cv;
* }));        // c-b-a 
* 
* console.log([[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
*     return a.concat(b);
* }, []));    // [ 4, 5, 2, 3, 0, 1 ]
*/
