
define([
	'../var/object'
], function (O) {

return Array.prototype.map = Array.prototype.map || function(func, that) {
	for(var i = 0, o = O(this), l = o.length >>> 0, a = new Array(l); i < l; i++) {
		if (i in o) a[i] = func.call(that, o[i], i, o);
    }
	return a;		
};

});

/**
* ECMAScript 5.1 Standard <br>
* 基于对当前数组内元素依次执行回调函数后的返回结果创建出一个新数组。
* @see {@link external:Array#filter}
* @see {@link external:Array#unique}
* @access public
* @func external:Array.prototype.map
* @param {Array~calcCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {array} 映射出的新数组
* @example
* console.log([1, 4, 9].map(Math.sqrt));                   // [1, 2, 3]
*/

/**
* @callback Array~calcCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array | object} arr - 当前在被遍历的数组、类数组对象或可迭代对象
* @returns {*} 被返回并添加到新数组的元素
*/
