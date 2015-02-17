
define(
[
	'./type',
	'./prop'
]
, function (
	type,
	prop
) 
{'use strict';

function p (a, b) {
	var c, d;
	return a === b || (a !== a && b !== b) ? 0 :
	       a != null && b == null ?  1 :
	       a == null && b != null ? -1 : 
	      (c = type(a), d = type(b), c === d) ? (a > b ? 1 : -1) : 
	      (c > d ? 1 : -1);
}

return function (a, b, k) {
	if (type(k) === 'function') return k(a, b);
	var  l = k && k.length,
		 i = 0,
		 r,
		 n;
	if (!k) return +p(a, b);
	while (!r && i < l) {
		n = k[i++];
		r = p(prop(a, n), prop(b, n));
	}
	return +r;
};

});

/**
* 比较两个参数大小。
* @see {@link Sumi.eq}
* @see {@link Sumi.Sort}
* @see {@link Sumi.Array.reorder}
* @access public
* @func Sumi.compare
* @param {*} a - 要比较的第一个值
* @param {*} b - 要比较的第二个值
* @param {array} [ns] - 用于比较的属性值列表。优先级按先后次序。符合 a.b.c 格式的属性链路径，参见 {@link Sumi.prop}
* @returns {number} a === b 则返回 0 ，a > b 则返回 1 ，否则返回 -1
* @example
* console.log(Sumi.compare(3, 1));               //  1
* console.log(Sumi.compare(NaN, 1));             // -1
* console.log(Sumi.compare(NaN, NaN));           //  0
* @example
* var a = { x: 1, y: 2 };
* var b = { x: 1, y: 1, z: 1 };
* console.log(Sumi.compare(a, b));               // -1
* console.log(Sumi.compare(a, b, ['x']));        //  0
* console.log(Sumi.compare(a, b, ['y']));        //  1
* console.log(Sumi.compare(a, b, ['z']));        // -1
* console.log(Sumi.compare(a, b, ['x', 'y']));   //  1
*/