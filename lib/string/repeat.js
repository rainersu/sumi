
define([
	'../number/isSafeInteger'
], function (I) {
	
return String.prototype.repeat = String.prototype.repeat || function(count) {
	var s = this,
		c = count >> 0,
		r = '';
	if(s.length && I(c) && c > 0) for(;;) {
		if((c & 1) === 1) {
			r += s;
		}
		c >>>= 1;
		if(!c) break;
		s+= s;
	}
	return r;
};

});

/**
* ECMAScript 6 Draft <br>
* 返回将当前字符串重复相加指定次数所生成的新字符串。
* @access public
* @func external:String.prototype.repeat
* @param {number} count - 重复相加次数
* @returns {string}
* @example
* console.log('abc'.repeat(-1));                   // ''
* console.log('abc'.repeat(0));                    // ''
* console.log('abc'.repeat(1));                    // 'abc'
* console.log('abc'.repeat(2));                    // 'abcabc'
* console.log('abc'.repeat(3.5));                  // 'abcabcabc'
* console.log('abc'.repeat(1/0));                  // ''
*/
