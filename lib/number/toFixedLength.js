
define(function () {

return Number.toFixedLength = function(num, flen, dlen) {
	var n = +num,
		d = dlen >> 0,
		b = n < 0,
		n = n.toFixed(d).slice(+b),
		i = n.length,
		l = flen >> 0;
	for(; i < l; i++) n = '0' + n;
	return (b ? '-' : '') + n;
};

});

/**
* 将数值处理输出为用于排版的固定长度（不包含正负号）的字符串。
* @see {@link external:Number.toInteger}
* @see {@link external:Math.trunc}
* @access public
* @func external:Number.toFixedLength
* @param {number} num - 数值
* @param {number} flen  - 输出字符串的总长度。不包含正负号，包含小数点
* @param {number} [dlen = 0] - 输出字符串的小数位长度。不包含小数点
* @returns {string}
* @example
* console.log(Number.toFixedLength(-12e2, 8, 3));  // -1200.000
* console.log(Number.toFixedLength(12e-2, 8, 3));  //  0000.120
* console.log(Number.toFixedLength(-12.3, 8, 3));  // -0012.300
* console.log(Number.toFixedLength(.1235, 8, 3));  //  0000.123
*/
