
define([
	'../var/slice'
]
, function (
	slice
) 
{'use strict';

return function (a) {
	return slice.call(Object(a));
};

});

/**
* 复制一个包含相同元素（值或引用）的数组。
* @see {@link external:Array.from}
* @see {@link external:Array.of}
* @see {@link Sumi.Array.fromObj}
* @access public
* @func Sumi.Array.clone
* @returns {array}
* @example
* console.log(Sumi.Array.clone([1, 2]));            // [ 1, 2 ]
console.log(Sumi.Array.clone({1: 2, length: 3}));	// [ , 2,  ]
* console.log(Sumi.Array.clone('0'));               // [ '0' ]
* console.log(Sumi.Array.clone(''));                // []
* console.log(Sumi.Array.clone(0));                 // []
* console.log(Sumi.Array.clone());                  // []
*/
