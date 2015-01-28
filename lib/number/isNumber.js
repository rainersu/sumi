
define([
	'../misc/classof'
], function (C) {
	
return Number.isNumber = function(v) {
	return v == v && C(v) == 'number';
};

});

/**
* 判断指定变量是否是真正的数字。
* @see {@link external:Number.isFinite}
* @access public
* @func external:Number.isNumber
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(isNumber(.1));           // true
* console.log(isNumber(NaN));          // false
* console.log(isNumber(Infinity));     // true
*/
