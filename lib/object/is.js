
define(function () {

return Object.is = Object.is || function(v1, v2) {
	return v1 === 0 && v2 === 0 ? 1 / v1 === 1 / v2 : v1 !== v1 ? v2 !== v2 : v1 === v2;
};

});	

/**
* ECMAScript 6 Draft <br>
* 判断两个值是否是同一个值。
* @access public
* @func external:Object.is
* @param {*} v1 - 第一个要比较的变量
* @param {*} v2 - 第二个要比较的变量
* @returns {boolean} 是否相同
* @example
* console.log(Object.is('foo', 'foo'));     // true
* console.log(Object.is([], []));           // false
* console.log(Object.is(null, null));       // true
* console.log(Object.is(0, -0));            // false
* console.log(Object.is(-0, -0));           // true
* console.log(Object.is(NaN, 0/0));         // true
* console.log(Object.is(NaN, NaN));         // true
*/
