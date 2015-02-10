
define(function () {'use strict';

function F () {}

return function (p) {
	p = p == undefined ? null : Object(p);
	F.prototype = p;
	var o = new F();
	F.prototype = null;
	return o;
};

});

/**
* ECMAScript 5.1 Standard <br> 
* 以指定的对象为原型创建一个新对象。
* @see {@link Sumi.proto}
* @see {@link Sumi.klass}
* @see {@link Sumi.Class}
* @access public
* @func external:Object.create
* @param {object} [proto=null] - 被用于创建新对象的原型对象
* @returns {object} 新建对象
* @example 这两行代码是等价的：
* var o1 = {};
* var o2 = Object.create(Object.prototype);
* 
* var x = { a: 1, total: function() { return this.a + this.b; } };
* var y = Object.create(x);
* y.b = 2;
* console.log(y.total());   // 3
*/
