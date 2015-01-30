
define(function () {
	
return Math.ceil10 = Math.ceil10 || function(value, exp) {
	var v = +value,
		e = exp >> 0,
		f = Math.ceil,
		g = 'e';
	if(!e) {
		return f(v);
	}
	v = v.toString().split(g);
	v = f(+(v[0] + g + (v[1] ? (+v[1] - e) : -e))).toString().split(g);
	return +(v[0] + g + (v[1] ? (+v[1] + e) : e));
};

});

/**
* 以去尾法调整一个数字的精确位数。
* @see {@link external:Math.round10}
* @see {@link external:Math.floor10}
* @access public
* @func external:Math.ceil10
* @param {number} num - 要调整精度的数字
* @param {number} [exp=0] - 精确到 10 的几次方
* @returns {number}
* @example
* console.log(Math.ceil10(55.51, -1));                 // 55.6
* console.log(Math.ceil10(51, 1));                     // 60
* console.log(Math.ceil10(-55.59, -1));                // -55.5
* console.log(Math.ceil10(-59, 1));                    // -50
* console.log(Math.ceil10(-55.551, -2));               // -55.55
*/
