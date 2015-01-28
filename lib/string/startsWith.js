
define(function () {
	
return String.prototype.startsWith = String.prototype.startsWith || function(str, pos) {
	var p = pos || 0;
	return this.lastIndexOf(str, p) === p;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断当前字符串是否以指定的子字符串起始。
* @see {@link external:String#endsWith}
* @access public
* @func external:String.prototype.startsWith
* @param {string} str - 要搜索的子字符串
* @param {number} [pos = 0] - 将原始字符串中的搜索范围强制指定从第个字符数处为开始
* @returns {boolean}
* @example
* var str = 'To be, or not to be, that is the question.';
* console.log(str.startsWith('To be'));            // true
* console.log(str.startsWith('not to be'));        // false
* console.log(str.startsWith('not to be', 10));    // true
*/
