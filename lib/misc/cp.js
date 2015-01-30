
define([
	'../var/object',
	'../var/undefined',
	'../var/hasOwnProperty',
	'./classof'
], function (O, U, H, C) {
	
return (function f(dst, src, r, c) {
	var s = O(src),
		d = O(dst),
		i,
		m,
		t,
		b;
	for(i in s) {
		if (H(s, i)) {
			if (r || !H(d, i)) {
				m = s[i];
				t = C(m);
				d[i] = c && (b = t == 'object' ? {} : t == 'array' ? [] : 0) ? f(b, m, r, c) : m;
			}
		}
	}
	return d;
});

});

/**
* 将字段从一个对象复制给另一个对象。
* @see {@link external:Function#method}
* @see {@link external:Object.assign}
* @see {@link external:Object.clone}
* @access public
* @func cp
* @param {object} dst - 目标对象
* @param {object} src - 源对象
* @param {object} [ovr=false] - 是否覆盖同名字段
* @param {boolean} [dpc=false] - 如果为 true ，则执行深复制：将所有字段递归复制至非对象和数组类型
* @returns {object} 目标对象
* @example
* console.log(cp({
*     a: '0'
* }, {
*     a: 0.1,
*     b: [1, 2, 3],
*     c: '1'
* }));
* // { a: '0', b: [ 1, 2, 3 ], c: '1' }
* 
* console.log(cp({
*     a: '0'
* }, {
*     a: 0.1,
*     b: [1, 2, 3],
*     c: '1'
* }, true));
* // { a: 0.1, b: [ 1, 2, 3 ], c: '1' }
* 
* var x = { a: 1 };
* var y = { a: 1, b: [1, 2]};
* cp(x, y, true);
* console.log(x.b == y.b);  // true
* cp(x, y, true, true);
* console.log(x.b == y.b);  // false
*/
