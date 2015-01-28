
define(function () {

return Array.fromObj = function () {
	var f = Array.prototype.slice;
	return f.call.apply(f, arguments);
};

});

/**
* 返回一个基于类数组对象（array-like object）转化创建而来的数组。
* @see {@link zip}
* @see {@link unzip}
* @see {@link external:Array.from}
* @see {@link external:Array.flatten}
* @see {@link external:Array.of}
* @access public
* @func external:Array.fromObj
* @param {array | object} fromObj - 源对象或数组
* @returns {array}
* @example
* (function() {
*     console.log(Array.fromObj(arguments));
* })(1, 2, 3);                                         // [ 1, 2, 3 ]
* console.log(Array.fromObj({1:0,length:3}));          // [ , 0,  ]
*/
