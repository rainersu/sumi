
define(
[
	'../var/hasOP',
	'./type'
]
, function (
	hasOP, 
	type
) 
{'use strict';

return (function f(x, y, r, c) {
	var s = Object(y),
		d = Object(x),
		i,
		m,
		t,
		b;
	for(i in s) {
		if (hasOP.call(s, i)) {
			if (r || !hasOP.call(d, i)) {
				m = s[i];
				t = type(m);
				d[i] = c && (b = t == 'object' ? {} : t == 'array' ? [] : 0) ? f(b, m, r, c) : m;
			}
		}
	}
	return d;
});

});

/**
* 将字段从一个对象复制给另一个对象。
* @see {@link Sumi.mixin}
* @see {@link Sumi.clone}
* @access public
* @func Sumi.cp
* @param {object} dst - 目标对象
* @param {object} src - 源对象
* @param {boolean} [override=false] - 是否覆盖同名字段
* @param {boolean} override.true - 覆盖已有同名字段
* @param {boolean} override.false - 跳过已有同名字段
* @param {boolean} [deep=false]
* @param {boolean} deep.true - 深复制：将所有字段递归复制至非对象和数组类型
* @param {boolean} deep.false - 浅复制：对于对象和数组类型字段只传递引用关系
* @returns {object} 目标对象
* @example
* console.log(Sumi.cp(0, .3));      // {}
* console.log(Sumi.cp(0, 'abc'));   // { '0': 'a', '1': 'b', '2': 'c' }
* 
* console.log(Sumi.cp({ a: '0' }, { a: 0.1, b: [1, 2, 3], c: '1' }));
* // { a: '0', b: [ 1, 2, 3 ], c: '1' }
* 
* console.log(Sumi.cp({ a: '0' }, { a: 0.1, b: [1, 2, 3], c: '1' }, true));
* // { a: 0.1, b: [ 1, 2, 3 ], c: '1' }
* @example
* var x = { a: 1 };
* var y = { a: 1, b: [1, 2]};
* Sumi.cp(x, y, true);
* console.log(x.b == y.b);               // true
* Sumi.cp(x, y, true, true);
* console.log(x.b == y.b);               // false
*/
