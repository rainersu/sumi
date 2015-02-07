
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
* @func Sumi.Core.type
* @param {*} val - 待检测值
* @returns {string} 类型名称
* @example
* console.log(Sumi.Core.type());                    // undefined     
* console.log(Sumi.Core.type(void 0));              // undefined
* console.log(Sumi.Core.type(undefined));           // undefined
* 
* console.log(Sumi.Core.type(null));                // null
* console.log(Sumi.Core.type(new TypeError()));     // error

* console.log(Sumi.Core.type({}));                  // object
* console.log(Sumi.Core.type(Math));                // object
* console.log(Sumi.Core.type(new Object()));        // object
* 
* console.log(Sumi.Core.type(Number));              // function
* console.log(Sumi.Core.type(new Function()));      // function
* console.log(Sumi.Core.type(function(){}));        // function
* console.log(Sumi.Core.type(Function.prototype));  // function
* 
* console.log(Sumi.Core.type([]));                  // array
* console.log(Sumi.Core.type(new Array()));         // array
* 
* console.log(Sumi.Core.type(0));                   // number
* console.log(Sumi.Core.type(.2));                  // number
* console.log(Sumi.Core.type(NaN));                 // number
* console.log(Sumi.Core.type(Infinity));            // number
* console.log(Sumi.Core.type(Number('2.')));        // number
* console.log(Sumi.Core.type(new Number('.2')));    // number
* 
* console.log(Sumi.Core.type(''));                  // string
* console.log(Sumi.Core.type('' + {}));             // string
* console.log(Sumi.Core.type(String([3])));         // string
* console.log(Sumi.Core.type(new String(.3)));      // string
* 
* console.log(Sumi.Core.type(true));                // boolean
* console.log(Sumi.Core.type(!!{}));                // boolean
* console.log(Sumi.Core.type(Boolean()));           // boolean
* console.log(Sumi.Core.type(new Boolean(3)));      // boolean
*/
