
define([
	'../var/object'
], function (O) {

return Array.prototype.filter = Array.prototype.filter || function(func, that) {
	for(var i = 0, o = O(this), l = o.length >>> 0, a = [], v; i < l; i++) {
		if (i in o && func.call(that, v = o[i], i, o)) a.push(v);
	}
	return a;		
};

});

/**
* ECMAScript 5.1 Standard <br>
* 对当前数组进行条件筛选，将筛选出的元素依原次序创建出一个新数组。
* @see {@link external:Array#map}
* @see {@link external:Array#unique}
* @access public
* @func external:Array.prototype.filter
* @param {Array~testCallback} func - 回调函数
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {array} 筛选出的新数组
* @example
* console.log([12, 5, 8, 130, 44].filter(function(element) {
*     return element >= 10;
* }));                                                     // filtered is [12, 130, 44]
*/

/**
* @callback Array~testCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array} arr - 当前在被遍历的数组
* @returns {boolean} 当前元素是否通过测试
*/
