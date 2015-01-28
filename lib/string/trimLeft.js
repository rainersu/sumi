
define(function () {
	
return String.prototype.trimLeft = String.prototype.trimLeft || function() {
	return this.replace(/^[\s\uFEFF\xA0]+/, '');
};

});

/**
* 去除字符串左端空格。
* @see {@link external:String#trim}
* @see {@link external:String#trimRight}
* @access public
* @func external:String.prototype.trimLeft
* @returns {string}
* @example
* console.log(1 + ' 2 3'.trimLeft());                 // 12 3
*/
