
define(function () {
	
return String.prototype.trim = String.prototype.trim || function() {
	return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

});

/**
* ECMAScript 5.1 Standard <br> 
* 去除字符串两端空格。
* @see {@link external:String#trimLeft}
* @see {@link external:String#trimRight}
* @access public
* @func external:String.prototype.trim
* @returns {string}
* @example
* console.log(' 1 2 '.trim() + 3);                    // 1 23
*/
