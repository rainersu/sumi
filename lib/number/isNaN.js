
define(function () {
	
return Number.isNaN = Number.isNaN || function(v) {
	return v !== v;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断指定变量是否是真正的 NaN 。不同于 isNaN 的地方在于本函数不会对被判断的变量做类型转换。
* @see {@link external:isNumber}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN}
* @access public
* @func external:Number.isNaN
* @param {*} val - 任意值
* @returns {boolean}
* @example
* console.log(isNaN(NaN));                    // true
* console.log(Number.isNaN(NaN));             // true
* console.log(isNaN('x'));                    // true
* console.log(Number.isNaN('x'));             // false
*/
