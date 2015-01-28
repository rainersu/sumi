
define(function () {
	
return Math.floor10 = Math.floor10 || function(value, exp) {
	var v = +value,
		e = exp >> 0,
		f = Math.floor,
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
* 以进位法调整一个数字的精确位数。
* @see {@link external:Math.round10}
* @see {@link external:Math.ceil10}
* @access public
* @func external:Math.floor10
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.floor10(55.59, -1));                // 55.5
* console.log(Math.floor10(59, 1));                    // 50
* console.log(Math.floor10(-55.51, -1));               // -55.6
* console.log(Math.floor10(-51, 1));                   // -60
* console.log(Math.floor10(-55.551, -2));              // -55.56
*/
