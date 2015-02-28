
define(function () {'use strict';
	
return String.prototype.startsWith = String.prototype.startsWith || function (s, p) {
	p = p || 0;
	return this.lastIndexOf(s, p) === p;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断当前字符串是否以指定的子字符串起始。
* @see {@link external:String#endsWith}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf}
* @access public
* @func external:String.prototype.startsWith
* @param {string} str - 要搜索的子字符串
* @param {number} [pos=0] - 将原始字符串中的搜索范围强制指定从第个字符数处为开始
* @returns {boolean}
* @example
* var str = 'To be, or not to be, that is the question.';
* 
* console.log(str.startsWith('To be'));            // true
* console.log(str.startsWith('not to be'));        // false
* console.log(str.startsWith('not to be', 10));    // true
*/
