
define(function () {

return Array.prototype.some = Array.prototype.some || function(func, that) {
	for(var i = 0, o = Object(this), l = o.length >>> 0; i < l; i++) {
		if(i in o && func.call(that, o[i], i, o)) return true;
    }
	return false;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 测试是否数组内至少有一个元素符合条件。
* @see {@link each}
* @see {@link external:Array#forEach}
* @see {@link external:Array#every}
* @access public
* @func external:Array.prototype.some
* @param {Array~testCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {boolean} 是否至少有一个元素通过测试
* @example
* function isBigEnough(element, index, array) {
*     return element >= 10;
* }
* console.log([12, 5, 8, 130, 44].every(isBigEnough));     // false
* console.log([12, 54, 18, 130, 44].every(isBigEnough));   // true
*/

/**
* @callback Array~testCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array} arr - 当前在被遍历的数组
* @returns {boolean} 当前元素是否通过测试
*/
