
define([
'../misc/cp'
], function (X) {

return Object.assign = Object.assign || function(dst) {
	var a = arguments,
		l = a.length,
		n = 1;
	while (n < l) {
		X(dst, a[n++], true);
	}
	return dst;
};

});

/**
* ECMAScript 6 Draft <br>
* 将一个或多个对象的可枚举自有属性复制给一个目标对象。
* @see {@link cp}
* @see {@link external:Function#method}
* @see {@link external:Object.clone}
* @access public
* @func external:Object.assign
* @param {object} dst - 目标对象
* @param {...object} [src] - 源对象
* @returns {object} 目标对象
* @example
* console.log(Object.assign({ a: 1 }, { a: 2, b: 2 }, { a: 3, b: 3, c: 3 }));  // { a: 3, b: 3, c: 3 }
* console.log(Object.assign({}, 1, null, { a: 1 }, { a: 2 }));                 // { a: 2 }
*/
