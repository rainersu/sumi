
define(function () {'use strict';
	
return function () {
	return this.replace(/^[\s\uFEFF\xA0]+/, '');
};

});

/**
* JavaScript 1.8.1<br>
* 去除字符串左端空格。
* @see {@link external:String#trim}
* @see {@link external:String#trimRight}
* @access public
* @func external:String.prototype.trimLeft
* @returns {string}
* @example
* console.log(0 + ' 1 2 '.trimLeft() + 3);     // 01 2 3
*/
