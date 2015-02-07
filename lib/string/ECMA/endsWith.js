
define(function () {'use strict';
	
return function (r, o) {
	var s = this,
		l = s.length,
		p = (o === undefined ? l : Math.min(o >> 0, l)) - r.length,
		i = s.indexOf(r, p);
	return i !== -1 && i === p;
};

});

/**
* ECMAScript 6 Draft <br>
* 判断当前字符串是否以指定的子字符串结尾。
* @see {@link external:String#startsWith}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf}
* @access public
* @func external:String.prototype.endsWith
* @param {string} str - 要搜索的子字符串
* @param {number} [pos] - 将原始字符串中的搜索范围强制指定为到多少个字符数处即为结尾
* @returns {boolean}
* @example
* var str = 'To be, or not to be, that is the question.';
* 
* console.log(str.endsWith('question.'));          // true
* console.log(str.endsWith('to be'));              // false
* console.log(str.endsWith('to be', 19));          // true
*/
