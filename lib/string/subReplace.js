
define(function () {'use strict';
	
return function (s, o, n) {
	return ('' + s).split(o).join(n || '');
};

});

/**
* 将所包含的某子字符串批量替换为新字符串。
* @see {@link external:String#substr}
* @access public
* @func Sumi.String.subReplace
* @param {string | regExp} oldStr - 要被替换的子字符串
* @param {string} [newStr=''] - 要用于替换的新字符串
* @returns {string}
* @example
* console.log(Sumi.String.subReplace('a-b-c', '-'));            // abc
* console.log(Sumi.String.subReplace('12345', '23', 'xxx'));    // 1xxx45
* console.log(Sumi.String.subReplace('a.b.c', /\w\./, '-'));    // --c
*/
