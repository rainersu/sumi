
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

var f = 'function',
	c = 'constructor';

function m (a, b, d) {
	for (var i in a) {
		if (hasOP.call(a, i) !== hasOP.call(b, i) || !e(a[i], b[i], d)) return true;
	}
	return false;
}

function e (a, b, d) {
	if (a === b || (a !== a && b !== b)) return true;
	if (!d) return false;
	if (a !== b) {
		var x = type(a),
			y = type(b);
		if (
			x === f ||
			y === f ||
			x !== y ||
			a[c] !== b[c] || 
			'' + a !== '' + b ||
			m(a, b, d) ||
			m(b, a, d)
		) {
			return false;  
		}	
	}
	return true;
}

return e;

});

/**
* 比较两个值是否相等。本方法使用严格等于 （ === ) 比较。
* @see {@link external:Object.is}
* @access public
* @func Sumi.Core.eq
* @param {*} val1 - 任意变量
* @param {*} val2 - 任意变量
* @param {boolean} [deep=false]
* @param {boolean} deep.true - 对引用类型进行深度递归值比较，判断它们是否一切相等
* @param {boolean} deep.false - 对简单类型和引用类型都只进行浅比较
* @returns {boolean}
* @example
* console.log(Sumi.Core.eq(null));                        // false
* console.log(Sumi.Core.eq(undefined));                   // true
* console.log(Sumi.Core.eq(null, undefined));             // false
* console.log(Sumi.Core.eq(NaN, 0 / 0));                  // true
* console.log(Sumi.Core.eq(+0, -0));                      // true
* console.log(Sumi.Core.eq(1 / 0, 2 / 0));                // true
* 
* console.log(Sumi.Core.eq([1, 2, 3], [1, 2, 3]));        // false
* console.log(Sumi.Core.eq([1, 2, 3], [1, 2, 3], true));  // true
* console.log(Sumi.Core.eq([1, 2, 3], [3, 2, 1]));        // false
* 
* console.log(Sumi.Core.eq({                              // true
*     a : .1,
*     b : [1, 2, 3],
*     c : '123'
* }, {
*     a : .1,
*     b : [1, 2, 3],
*     c : '123'
* }, true));
* @example
* var x='abc';
* var y=new String('abc');
* console.log(Sumi.Core.eq(x, y));                        // false
* console.log(Sumi.Core.eq(x, y, true));                  // true
* x.z=1;
* y.z=1;
* console.log(Sumi.Core.eq(x, y));                        // false
* console.log(Sumi.Core.eq(x, y, true));                  // false
* @example
* var x = /\d/ig;
* var y = new RegExp('\\d', 'ig');
* console.log(Sumi.Core.eq(x, y));                        // false
* console.log(Sumi.Core.eq(x, y, true));                  // true
* y.exec('12345678');
* console.log(Sumi.Core.eq(x, y));                        // false
* console.log(Sumi.Core.eq(x, y, true));                  // true
*/
