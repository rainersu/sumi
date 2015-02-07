
define(function () {'use strict';
	
return function (v, e) {
	v = +v;
	e = e >> 0;
	if(!e) return Math.ceil(v);
	var g = 'e';
	v = v.toString().split(g);
	v = Math.ceil(+(v[0] + g + (v[1] ? (+v[1] - e) : -e))).toString().split(g);
	return +(v[0] + g + (v[1] ? (+v[1] + e) : e));
};

});

/**
* 以去尾法调整一个数字的精确位数。
* @see {@link Sumi.Math.round10}
* @see {@link Sumi.Math.floor10}
* @see {@link external:Math.trunc}
* @access public
* @func Sumi.Math.ceil10
* @param {number} num - 要调整精度的数字
* @param {number} [exp=0] - 精确到 10 的几次方
* @returns {number}
* @example
* console.log(Sumi.Math.ceil10(55.51, -1));     // 55.6
* console.log(Sumi.Math.ceil10(51, 1));         // 60
* console.log(Sumi.Math.ceil10(-55.59, -1));    // -55.5
* console.log(Sumi.Math.ceil10(-59, 1));        // -50
* console.log(Sumi.Math.ceil10(-55.551, -2));   // -55.55
*/
