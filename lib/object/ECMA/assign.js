
define(
[
	'../../core/cp'
]
, function (
	cp
) 
{'use strict';

return function (d) {
	var a = arguments,
		l = a.length,
		n = 1;
	while (n < l) {
		cp(d, a[n++], true);
	}
	return d;
};

});

/**
* ECMAScript 6 Draft <br>
* 将一个或多个对象的可枚举自有属性复制给一个目标对象。
* @see {@link Sumi.Core.cp}
* @see {@link Sumi.Object.clone}
* @access public
* @func external:Object.assign
* @param {object} dst - 目标对象
* @param {...object} [src] - 源对象
* @returns {object}
* @example
* console.log(Object.assign({ a: 1 }, { a: 2, b: 2 }, { a: 3, b: 3, c: 3 }));  
* // { a: 3, b: 3, c: 3 }
* console.log(Object.assign({}, 1, null, { a: 1 }, { a: 2 }));                 
* // { a: 2 }
* 
* var o1 = { a: 1 };
* var o2 = { b: 2 };
* var o3 = { c: 3 };
* var obj = Object.assign(o1, o2, o3);
* console.log(obj);   // { a: 1, b: 2, c: 3 }
* console.log(o1);    // { a: 1, b: 2, c: 3 }
*/
