
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

var a = {
		string : String,
		number : Number,
		boolean: Boolean
	};

function f(s, c) {
	c = arguments.length < 2 ? true : c;
	var t = typeof s,
		n,
		i,
		r;
	if (!t || t in a) r = s;
	else {
		t = type(s);
		if (t == 'function') {
			r = function ( ) {
					return s.apply(this, arguments);
				};
			r.prototype = s.prototype;
		}
		else {
			r = t == 'regexp'   ? (0, eval)(s.toString()) :
				t == 'date'     ? new Date(s.getTime()) :
				t == 'array'    ? [] :
				t in a          ? new a[t](s) : {};
		}
		for(n in s) {
			if (hasOP.call(s, n)) {
				i = s[n];
				if (t != 'string' || r.charAt(n) != i) r[n] = c ? f(i, c) : i; // <ie8 不支持 string[index] 语法
			}
		}
	}	
	return r;
}
	
return f;

});

/**
* 克隆指定的对象或其它数据类型。
* @see {@link Sumi.mixin}
* @see {@link Sumi.cp}
* @access public
* @func Sumi.clone
* @param {*} src - 克隆源
* @param {boolean} [deep=true]
* @param {boolean}  deep.true  - 执行深复制：递归遍历所有层级的字段并克隆出副本
* @param {boolean}  deep=false - 执行浅复制：只遍历第一子层级且不对引用类型做克隆处理
* @returns {*}
* @example
* var x = function () { return 3; };
* var y = Sumi.clone(x);
* console.log(x == y);                        // false
* console.log(x() == y());                    // true
* @example
* var x = /^\s+$/ig;
* var y = Sumi.clone(x);
* console.log(x == y);                        // false
* console.log(x.pattern == y.pattern);        // true
* @example
* var x = 'abc';
* var y = Sumi.clone(x);
* console.log(x == y);                        // true
* console.log(x === y);                       // true
* @example
* var x = new String('abc');
* var y = Sumi.clone(x);
* console.log(x == y);                        // false
* console.log(x + '' === y + '');             // true
* @example
* var x = [ 1, 2, 3 ];
* var y = Sumi.clone(x);
* console.log(x == y);                        // false
* console.log(x.toString() == y.toString());  // true
*/
