
define([
	'../var/object'
], function (O) {

return Array.prototype.find = Array.prototype.find || function(func, that) {
	for(var i = 0, o = O(this), l = o.length >>> 0, v; i < l; i++) {
		if (i in o && func.call(that, v = o[i], i, o)) return v;
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
* @param {Array~testCallback} func - 回调函数
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

/**
* @callback Array~testCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array} arr - 当前在被遍历的数组
* @returns {boolean} 当前元素是否通过测试
*/
