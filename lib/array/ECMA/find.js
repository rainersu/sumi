
define(function () {'use strict';

return Array.prototype.find = Array.prototype.find || function(f, t) {
	for(var i = 0, o = Object(this), l = o.length >>> 0, v; i < l; i++) {
		if (i in o && f.call(t, v = o[i], i, o)) return v;
	}	
};

});

/**
* ECMAScript 6 Draft <br>
* 在当前数组中查找出第一个符合筛选条件的元素并返回它。
* @see {@link external:Array#contains}
* @see {@link external:Array#findIndex}
* @see {@link external:Array#indexOf}
* @see {@link external:Array#lastIndexOf}
* @see {@link external:Array#includes}
* @access public
* @func external:Array.prototype.find
* @param {external:Array~someCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {*} 找到的元素
* @example
* function isPrime(element, index, array) {
*     var start = 2;
*     while(start <= Math.sqrt(element)) {
*         if (element % start++ < 1) {
*             return false;
*         }
*     }
*     return element > 1;
* }
* console.log([4, 6, 8, 12].find(isPrime));                // undefined
* console.log([4, 5, 8, 12].find(isPrime));                // 5
*/
