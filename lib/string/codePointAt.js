	
define(function () {
	
return String.prototype.codePointAt = String.prototype.codePointAt || function(idx) {
   	var s = this,
		i = idx >> 0,
		l = s.length,
		f = s.charCodeAt(i),
		w = s.charCodeAt(i + 1),
		e = (i + 1 === l);
   if(i > -1 && i < l) {
	   return f < 0xD800 || f > 0xDBFF || e || w < 0xDC00 || w > 0xDFFF ? f : (f - 0xD800) * 1024 + w - 0xDC00 + 0x10000;
   } 
};

});

/**
* ECMAScript 6 Draft <br>
* 返回指定索引处的字符（UTF-16编码的代码点）。
* @see {@link external:String.fromCodePoint}
* @see {@link external:String#nbmpCharCodeAt}
* @see {@link external:String#nbmpCharAt}
* @access public
* @func external:String.prototype.codePointAt
* @param {number} [idx = 0] - 字符位置
* @returns {number | undefined}
* @example
* console.log('ABC'.codePointAt(1));             // 66
* console.log('\uD800\uDC00'.codePointAt(0));    // 65536
* console.log('XYZ'.codePointAt(42));            // undefined		
*/
