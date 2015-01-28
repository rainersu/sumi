
define(function () {

return Object.getPrototypeOf = Object.getPrototypeOf || function(o) {
	var c = o.constructor || null;
	return o.__proto__ || c && c.prototype;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 获取对象的原型。
* @access public
* @func external:Object.getPrototypeOf
* @param {object} obj - 要获取原型的对象
* @returns {object} 原型
* @example
* console.log(Object.getPrototypeOf({}));
* console.log(Object.getPrototypeOf([]));
* console.log(Object.getPrototypeOf(/$/ig));
* console.log(Object.getPrototypeOf(function(){}));
*/
