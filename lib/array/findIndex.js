
define([
	'../var/object'
], function (O) {

return Array.prototype.findIndex = Array.prototype.findIndex || function(func, that) {
	for(var i = 0, o = O(this), l = o.length >>> 0, v; i < l; i++) {
		if (i in o && func.call(that, v = o[i], i, o)) return i;
	}
	return -1;	
};

});

/**
* ECMAScript 6 Draft <br>
* 在当前数组中查找出第一个符合筛选条件的元素并返回它的索引。
* @see {@link external:Array#contains}
* @see {@link external:Array#find}
* @see {@link external:Array#indexOf}
* @see {@link external:Array#lastIndexOf}
* @see {@link external:Array#includes}
* @access public
* @func external:Array.prototype.findIndex
* @param {Array~testCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {number} 找到的元素的索引
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
* console.log([4, 6, 8, 12].findIndex(isPrime));           // -1
* console.log([4, 5, 8, 12].findIndex(isPrime));           //  1
*/

/**
* @callback Array~testCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array} arr - 当前在被遍历的数组
* @returns {boolean} 当前元素是否通过测试
*/
