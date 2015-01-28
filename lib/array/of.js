
define([
	'../var/slice'
], function (S) {
	
return Array.of = Array.of || function () {
	return S(arguments);
};

});

/**
* ECMAScript 6 Draft <br>
* 基于提供的系列参数创建新数组。
* @see {@link zip}
* @see {@link unzip}
* @see {@link external:Array.from}
* @see {@link external:Array.fromObj}
* @see {@link external:Array.flatten}
* @access public
* @func external:Array.of
* @param {...*} [arg] - 要用于加入新创建数组的元素
* @returns {array}
* @example
* console.log(Array.of(1));                            // [1]
* console.log(Array.of(1, 2, 3));                      // [1, 2, 3]
* console.log(Array.of(undefined));                    // [undefined]
*/
