
define(function () {

return Array.prototype.every = Array.prototype.every || function(f, t) {
	for(var o = Object(this), l = o.length >>> 0; l--;) {
		if(l in o && !f.call(t, o[l], l, o)) return !!0;
    }
	return !!1;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 测试是否数组内的所有元素都符合条件。
* @see {@link each}
* @see {@link external:Array#forEach}
* @see {@link external:Array#some}
* @access public
* @func external:Array.prototype.every
* @param {Array~testCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {boolean} 是否所有元素都通过测试
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
