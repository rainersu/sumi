
define([
	'../var/undefined'
], function (U) {

var a = 'Boolean Number String Function Array Date RegExp Object Error'.split(' '),
	o = {}, 
	l = a.length - 1,
	s = 'object',
	i;

for (; l + 1; l--) {
	i = a[l];
	o['[' + s + ' ' + i + ']'] = i.toLowerCase();
};

return function(v) {
	i = typeof v;
	return v == U ? '' + v : i === s || i === "function" ? o[Object.prototype.toString.call(v)] || s : i;
};

});

/**
* 获取指定变量的真实类型。
* @see {@link external:Object.typeof}
* @access public
* @func classof
* @param {*} val - 任意变量
* @returns {string} 类型名称
* @example
* console.log(classof(.2));              // number
* console.log(classof(''));              // string
* console.log(classof(new Number(.2)));  // number
* console.log(classof(new String('')));  // string
* console.log(classof({}));              // object
* console.log(classof([]));              // array
* console.log(classof(Function));        // function
* console.log(classof());                // undefined
* console.log(classof(null));            // null
* console.log(classof(NaN));             // number
*/
