
define(
[
	'./cp',
	'./type'
]
, function (
	cp,
	type
) 
{'use strict';

return function () {
	var d = {},
		a = arguments,
		l = a.length,
		n = 1;
	while (n < l) {
		cp(d, a[n++], true);
	}
	return d;
};

});

/**
* 从多个源对象混合复制字段，创建一个新对象。
* @see {@link Sumi.clone}
* @see {@link Sumi.cp}
* @access public
* @func Sumi.mixin
* @param {...*} src - 复制源
* @returns {object}
* @example
* console.log(Sumi.mixin({ x: 1 }, { x: 2, y: 2 }, { x:3, y: 3, z: 3 }));
* // { x: 3, y: 3, z: 3 }
* console.log(Sumi.mixin({ x: 1 }, { x: 2, y: 2, z: 2 }, { x:3, y: 3 }));
* // { x: 3, y: 3, z: 2 }
* 
* console.log(Sumi.mixin());               // {}
* console.log(Sumi.mixin(0, false, ''));   // {}
* 
* console.log(Sumi.mixin(0, false, [ 1, 2 ], [ 2 ]));
* // { '0': 2, '1': 2 }
* console.log(Sumi.mixin(1, 'abc', true, [ 1, 2 ], [ 2 ]));
* // { '0': 2, '1': 2, '2': 'c' }
*/
