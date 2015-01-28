
define([
	'../misc/classof'
], function (C) {

return Object.typeof = C;

});

/**
* 获取指定变量的真实类型。
* @see {@link classof}
* @access public
* @func external:Object.typeof
* @param {*} val - 任意变量
* @returns {string} 类型名称
* @example
* console.log(Object.typeof(.2));              // number
* console.log(Object.typeof(''));              // string
* console.log(Object.typeof(new Number(.2)));  // number
* console.log(Object.typeof(new String('')));  // string
* console.log(Object.typeof({}));              // object
* console.log(Object.typeof([]));              // array
* console.log(Object.typeof(Function));        // function
* console.log(Object.typeof());                // undefined
* console.log(Object.typeof(null));            // null
* console.log(Object.typeof(NaN));             // NaN
*/
