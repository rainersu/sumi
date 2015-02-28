
define(
[
	'../../var/slice'
]
, function (
	slice
) 
{'use strict';
	
return Array.of = Array.of || function () {
	return slice.call(arguments);
};

});

/**
* ECMAScript 6 Draft <br>
* 基于提供的系列参数创建新数组。
* @see {@link external:Array.from}
* @see {@link Sumi.Array.fromObj}
* @see {@link Sumi.Array.flatten}
* @see {@link Sumi.Array.concatAll}
* @see {@link Sumi.Array.clone}
* @access public
* @func external:Array.of
* @param {...*} [item] - 要用于加入新创建数组的元素
* @returns {array}
* @example
* console.log(Array.of());                // [   ]
* console.log(Array.of(1));               // [ 1 ]
* console.log(Array.of(1, 2, 3));         // [ 1, 2, 3 ]
* console.log(Array.of(undefined));       // [ undefined ]
*/
