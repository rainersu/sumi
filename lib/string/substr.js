
define(function () {
	
var f = String.prototype.substr;

return 'ab'.substr(-1) == 'b' ? f : String.prototype.substr = function(s, l) {
	return f.call(this, s < 0 ? this.length + s : s, l);
};

});

/**
* ECMAScript 5.1 Standard <br> 
* 获取一个从指定位置开始并具有指定长度的子字符串。修正了Microsoft's JScript不支持负值 start 参数的错误。
* @see {@link external:String#replaceSubStr}
* @access public
* @func external:String.prototype.substr
* @param {number} start -  子字符串的起始位置。
* @param {number} [length] -  子字符串中包含的字符数。
* @returns {string}
* @example
* var str = 'abcdefghij';
* console.log('(1, 2): '   + str.substr(1, 2));    // '(1, 2): bc'
* console.log('(-3, 2): '  + str.substr(-3, 2));   // '(-3, 2): hi'
* console.log('(-3): '     + str.substr(-3));      // '(-3): hij'
* console.log('(1): '      + str.substr(1));       // '(1): bcdefghij'
* console.log('(-20, 2): ' + str.substr(-20, 2));  // '(-20, 2): ab'
* console.log('(20, 2): '  + str.substr(20, 2));   // '(20, 2): '
*/
