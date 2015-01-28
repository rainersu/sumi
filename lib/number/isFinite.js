
define([
	'./isNumber'
], function (I) {
	
return Number.isFinite = Number.isFinite || function(v) {
	return I(v) && isFinite(v);
};

});

/**
* ECMAScript 6 Draft <br>
* 判断指定变量是否是有限的数值。
* @see {@link external:isNumber}
* @access public
* @func external:Number.isFinite
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(Number.isFinite(.1));           // true
* console.log(Number.isFinite(NaN));          // false
* console.log(Number.isFinite(Infinity));     // false
*/
