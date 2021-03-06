
define(function () {'use strict';

return Array.prototype.reduce = Array.prototype.reduce || function (f, r) {
	var o = Object(this), 
		l = o.length >>> 0, 
		b = 1 < arguments.length, 
		v = b ? r : undefined,
		i = 0;		
	for(; i < l; i++) if (i in o) {
		if(b) {
			v = f(v, o[i], i, o);
		}
		else {
			v = o[i];
			b = true;
		}
	}
	return v;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 对数组中的所有元素调用指定的回调函数。该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。
* @see {@link external:Array#map}
* @see {@link external:Array#reduceRight}
* @access public
* @func external:Array.prototype.reduce
* @param {external:Array~reduceCallback} callback - 回调函数
* @param {*} [initValue] - 用作来启动累积初始值。 第一次调用回调函数会将此值作为参数而非数组值提供
* @returns {*} 通过最后一次调用回调函数获得的累积结果
* @example
* console.log([0, 1, 2, 3, 4].reduce(function(prev, curr) {
*     return prev + curr;
* }));   // 10
* 
* console.log(Array.prototype.reduce.call('abc', function(pv, cv) {
*     return pv + (pv ? '-' : '') + cv;
* }));   // a-b-c 
*/

/**
* @callback external:Array~reduceCallback
* @param {*} previousValue -  通过上一次调用回调函数获得的值。如果提供了 initialValue，则首次调用函数时，previousValue 为 initialValue 
* @param {*} currentValue - 当前数组元素的值
* @param {number} currentIndex - 当前数组元素的数字索引
* @param {array | object} arr - 当前在被遍历的数组、类数组对象或可迭代对象
* @returns {*} 返回值在下一次调用回调函数时作为 previousValue 参数提供。最后一次调用回调函数获得的返回值为 reduce 方法的返回值
*/
