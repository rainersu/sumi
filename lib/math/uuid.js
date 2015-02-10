
define(function () {'use strict';

var c = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
	f = Math.random;
	
return function (e, a) {
	var l = e || 36,
		u = new Array(l), 
		x = a || c.length,
		d = 0,
		i,
		r;
	if (e) {
		for (i = 0; i < l; i++) u[i] = c[0 | f() * x];
	}
	else {
		for (i = 0; i < l; i++) {
			if (i == 14) {
				u[i] = '4';
			}
			else if (i == 8 || i == 13 || i == 18 || i == 23) {
				u[i] = '-';
			} 
			else {
				if (d <= 0x02) d = 0x2000000 + (f() * 0x1000000) | 0;
				r = d & 0xf;
				d = d >>  4;
				u[i] = c[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	return u.join('');
};

}); 

/**
* 随机生成一个全局唯一标示符。如果无参数，则生成一个符合 RFC4122,v4 规则的 UUID(Universally Unique IDentifier)。
* @see {@link Sumi.Math.rnd}
* @see {@link Sumi.Array.rnd}
* @see {@link Sumi.UUID}
* @access public
* @func Sumi.Math.uuid
* @param {number} [len=36] - 指定所生成的唯一标识符的长度
* @param {number} [radix=0] - 每个字符允许的取值上限	
* @returns {string}
* @example
* console.log(Sumi.Math.guid(8));
* console.log(Sumi.Math.guid( ));
*/
