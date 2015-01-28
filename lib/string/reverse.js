
define([
	'../misc/classof'
], function (C) {
	
return String.prototype.reverse = function(sep) {
	var p = sep,
		c = C(p),
		b = c == 'regexp',
		s = b ? p : '' + p,
		r = RegExp;
	return this.split(s).reverse().join(b ? r.lastMatch : s);
};

});

/**
* 反转字符串。
* @access public
* @func external:String.prototype.reverse
* @param {string | regExp} [separator = ''] - 用于最小切分单位的可选分隔符
* @returns {string}
* @example
* console.log('12345'.reverse());                    // 54321
* console.log('习近平'.reverse());                    // 平近习
* console.log('John Wong'.reverse(/\s/));            // Wong John
*/
