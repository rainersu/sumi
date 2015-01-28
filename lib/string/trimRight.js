
define(function () {

return String.prototype.trimRight = String.prototype.trimRight || function() {
	return this.replace(/[\s\uFEFF\xA0]+$/, '');
};

});

/**
* 去除字符串右端空格。
* @see {@link external:String#trimLeft}
* @see {@link external:String#trim}
* @access public
* @func external:String.prototype.trimRight
* @returns {string}
* @example
* console.log('1 2 '.trimRight() + 3);                // 1 23
*/
