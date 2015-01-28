
define(function () {
	
return Math.round10 = Math.round10 || function(value, exp) {
	var v = +value,
		e = exp >> 0,
		f = Math.round,
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
* 以舍入法调整一个数字的精确位数。
* @see {@link external:Math.ceil10}
* @see {@link external:Math.floor10}
* @access public
* @func external:Math.round10
* @param {number} x - 数字
* @returns {number}
* @example
* console.log(Math.round10(55.55, -1));                // 55.6
* console.log(Math.round10(55.549, -1));               // 55.5
* console.log(Math.round10(55, 1));                    // 60
* console.log(Math.round10(54.9, 1));                  // 50
* console.log(Math.round10(-55.55, -1));               // -55.5
* console.log(Math.round10(-55.551, -1));              // -55.6
* console.log(Math.round10(-55, 1));                   // -50
* console.log(Math.round10(-55.1, 1));                 // -60
*/
