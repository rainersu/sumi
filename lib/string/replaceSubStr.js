
define(function () {
	
return String.prototype.replaceSubStr = function(oldStr, newStr) {
	return this.split(oldStr).join(newStr || '');
};

});

/**
* 将所包含的某子字符串批量替换为新字符串。
* @see {@link external:String#subStr}
* @access public
* @func external:String.prototype.replaceSubStr
* @param {string | regExp} oldStr - 要被替换的子字符串
* @param {string} [newStr = ''] - 要用于替换的新字符串
* @returns {string}
* @example
* console.log('12345'.replaceSubStr('23', 'xxx'));   // 1xxx45
* console.log('a.b.c'.replaceSubStr(/\w\./, '-'));   // --c
*/
