
define([
	'../var/undefined',
	'../var/hasOwnProperty',
	'../misc/classof'
], function (U, H, C) {

var a = {
		string : String,
		number : Number,
		boolean: Boolean
	};

return Object.clone = (function f(src, dpc) {
	var s = src,
		t = typeof s,
		c = dpc == U ? 1 : dpc,
		n,
		i,
		r;
	if (!t || t in a) r = s;
	else {
		t = C(s);
		if (t == 'function') {
			r = function() {
					return s.apply(this, arguments);
				};
			r.prototype = s.prototype;
		}
		else {
			r = t == 'regexp'   ? (0, eval)(s.toString()) :
				t == 'date'     ? new Date(s.getTime()) :
				t == 'array'    ? [] :
				t in a ? new a[t](s) : {};
		}
		for(n in s) {
			if (H(s, n)) {
				i = s[n];
				if (t != 'string' || r.charAt(n) != i) r[n] = c ? f(i, c) : i; // <ie8 不支持 string[index] 语法
			}
		}
	}	
	return r;
});

});

/**
* 克隆指定的对象或其它数据类型。
* @see {@link cp}
* @see {@link external:Function#method}
* @see {@link external:Object.assign}
* @access public
* @func external:Object.clone
* @param {*} src - 克隆源
* @param {boolean} [dpc=true] - 如果为 true ，则执行深复制：递归遍历所有层级的字段并克隆出副本。如果为 false ，则只遍历第一子层级且不对引用类型做克隆处理
* @returns {*}
* @example
* var x = function () { return 3; };
* var y = Object.clone(x);
* console.log(x == y);                  // false
* console.log(x() == y());              // true
* 
* var x = /^\s+$/ig;
* var y = Object.clone(x);
* console.log(x == y);                  // false
* console.log(x.pattern == y.pattern);  // true
*/
