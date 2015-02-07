
define(function () {'use strict';

return function () {
	return this.replace(/[\s\uFEFF\xA0]+$/, '');
};

});

/**
* JavaScript 1.8.1<br>
* 去除字符串右端空格。
* @see {@link external:String#trimLeft}
* @see {@link external:String#trim}
* @access public
* @func external:String.prototype.trimRight
* @returns {string}
* @example
* console.log(0 + ' 1 2 '.trimRight() + 3);    // 0 1 23
*/
