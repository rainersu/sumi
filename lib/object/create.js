
define([
'../misc/cp'
], function (X) {

return Object.create = Object.create || function(proto, props) {
	var O = function() {};
	O.prototype = proto;
	return X(new O(), props);
};

});

/**
* ECMAScript 5.1 Standard <br> 
* 以指定的对象为原型创建一个新对象。
* @access public
* @func external:Object.create
* @param {object} proto - 被用于创建新对象的原型对象
* @param {object} [props] - 如果指定了此参数，此对象的所有可枚举自有属性将被传递给新建对象
* @returns {object} 新建对象
* @example 这两行代码是等价的：
* var o1 = {};
* var o2 = Object.create(Object.prototype);
*/
