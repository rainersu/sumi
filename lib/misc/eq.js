
define([
	'../var/undefined',
	'../var/hasOwnProperty',
	'./classof'
], function (U, H, C) {

var f = 'function',
	F = 'constructor',
	c = 'boolean number string';

function m (a, b) {
	for  (var i in a) {
		if (H(a, i) !== H(b, i) || !e(a[i], b[i])) return 1;
	}
	return 0;
}

function e(a, b) {
	if (a !== b) {
		var x = C(a),
			y = C(b);
		if (
			x === f ||
			y === f ||
			x !== y ||
			a[F] !== b[F] || 
			'' + a !== '' + b ||
			m(a, b) ||
			m(b, a)
		) {
			return false;  
		}
	}
	return true;
}

return e;

});

/**
* 对两个变量进行深度递归值比较，判断它们是否一切相等。
* @see {@link external:Object.isEqual}
* @access public
* @func eq
* @param {*} vala - 任意变量
* @param {*} valb - 任意变量
* @returns {boolean}
* @example
* console.log(eq(null, undefined));
* // false
* 
* console.log(eq('abc', new String('abc')));
* // true
* 
* var x = 'abc';
* var y = new String('abc');
* x.z = 1;
* y.z = 1;
* console.log(eq(x, y));
* // false
* 
* console.log(eq(+0, -0));              
* // true
* 
* console.log(eq(NaN, NaN));            
* // true
* 
* console.log(eq(1 / 0, 2 / 0));        
* // true
* 
* console.log(eq(/^.*$/ig, new RegExp('^.*$', 'ig')));
* // true
* 
* console.log(eq(new Date(1970,2,1), new Date('Sun Mar 01 1970 00:00:00 GMT+0800 (CST)')));
* // true
* 
* console.log(eq({
*     a: '1',
* 	  c: [1, 2, 3],
* 	  b: new Date(1970,2,1),
*     d: /^.*$/ig
* }, {
*     a: '1',
*     c: [1, 2, 3],
*     b: new Date('Sun Mar 01 1970 00:00:00 GMT+0800 (CST)'),
*     d: new RegExp('^.*$', 'ig')
* })); 
* // true
*/
