
define(function () {

return function (proto) {
	function F() {}
	F.prototype = proto;
	return new F();
};

});

/**
* 以指定的对象为原型创建一个新对象。
* @see {@link external:Object.create}
* @access public
* @func inherit
* @param {object} proto - 被用于创建新对象的原型对象
* @returns {object} 新建对象
* @example 这两行代码是等价的：
* var o1 = {};
* var o2 = inherit(Object.prototype);
*/
