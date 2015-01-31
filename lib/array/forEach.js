
define(function () {

return Array.prototype.forEach = Array.prototype.forEach || function(func, that) {
	for(var i = 0, t = this, o = Object(t), l = o.length >>> 0; i < l; i++) {
		if (i in o) func.call(that, o[i], i, o);
    }
	return t;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 遍历数组依次对每个元素执行回调函数。
* @see {@link each}
* @see {@link external:Array#every}
* @see {@link external:Array#some}
* @access public
* @func external:Array.prototype.forEach
* @param {Array~execCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {undefined}
* @example
* [1, 2, 3].forEach(function(v) {
*     console.log(v);
* });                           
*/

/**
* @callback Array~execCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array | object} arr - 当前在被遍历的数组、类数组对象或可迭代对象
* @returns {undefined}
*/
