
define(function () {'use strict';

var a = 'Error RegExp Date Function Array Object Boolean String Number'.split(' '),
	l = a.length,
	o = {}, 
	f = o.toString,
	s = 'object',
	i;

for (; l--;) {
	i = a[l];
	o['[' + s + ' ' + i + ']'] = i.toLowerCase();
};

return function(v) {
	return v == undefined ? '' + v : (i = typeof v) === s || i === "function" ? o[f.call(v)] || s : i;
};

});

/** 
* 获取指定变量的真实类型。
* @access public
* @func Sumi.type
* @param {*} val - 待检测值
* @returns {string} 类型名称
* @example
* console.log(Sumi.type());                    // undefined     
* console.log(Sumi.type(void 0));              // undefined
* console.log(Sumi.type(undefined));           // undefined
* 
* console.log(Sumi.type(null));                // null
* console.log(Sumi.type(new TypeError()));     // error

* console.log(Sumi.type({}));                  // object
* console.log(Sumi.type(Math));                // object
* console.log(Sumi.type(new Object()));        // object
* 
* console.log(Sumi.type(Number));              // function
* console.log(Sumi.type(new Function()));      // function
* console.log(Sumi.type(function(){}));        // function
* console.log(Sumi.type(Function.prototype));  // function
* 
* console.log(Sumi.type([]));                  // array
* console.log(Sumi.type(new Array()));         // array
* 
* console.log(Sumi.type(0));                   // number
* console.log(Sumi.type(.2));                  // number
* console.log(Sumi.type(NaN));                 // number
* console.log(Sumi.type(Infinity));            // number
* console.log(Sumi.type(Number('2.')));        // number
* console.log(Sumi.type(new Number('.2')));    // number
* 
* console.log(Sumi.type(''));                  // string
* console.log(Sumi.type('' + {}));             // string
* console.log(Sumi.type(String([3])));         // string
* console.log(Sumi.type(new String(.3)));      // string
* 
* console.log(Sumi.type(true));                // boolean
* console.log(Sumi.type(!!{}));                // boolean
* console.log(Sumi.type(Boolean()));           // boolean
* console.log(Sumi.type(new Boolean(3)));      // boolean
*/
