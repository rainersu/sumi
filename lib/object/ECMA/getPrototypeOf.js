
define(function () {'use strict';

return function(o) {
	var c = o.constructor || null;
	return o.__proto__ || c && c.prototype;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 获取对象的原型。
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf}
* @access public
* @func external:Object.getPrototypeOf
* @param {object} obj - 要获取原型的对象
* @returns {object}
* @example
* console.log(Object.getPrototypeOf({}));             // {}
* console.log(Object.getPrototypeOf(/$/ig));          // /(?:)/
* console.log(Object.getPrototypeOf(function(){}));   // [Function: Empty]
*/
