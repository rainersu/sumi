
define(
[
	'../math/iadd',
	'./util/bit_rol',
	'./util/utf16to8',
	'./util/utf8to16LE',
	'./util/utf8to16BE',
	'./util/rstr2any',
	'./util/rawToBase64',
	'./util/rawToHex',
	'./util/rstr2binl',
	'./util/binl2rstr'
]
, function (
	iadd, 
	bit_rol, 
	utf16to8, 
	utf8to16LE, 
	utf8to16BE, 
	rstr2any,
	rawToBase64,
	rawToHex,
	rstr2binl,
	binl2rstr
) 
{'use strict';
	
function rstr_md5 (s) {
	return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}

function rstr_hmac_md5 (k, d) {
	var b = rstr2binl(k),
		a = new Array(16), 
		o = new Array(16),
		h,
		i;
	if(b.length > 16) b = binl_md5(b, k.length * 8);
	for(i = 0; i < 16; i++) {
		a[i] = b[i] ^ 0x36363636;
		o[i] = b[i] ^ 0x5C5C5C5C;
	}
	h = binl_md5(a.concat(rstr2binl(d)), 512 + d.length * 8);
	return binl2rstr(binl_md5(o.concat(h),  512 + 128));
}

function m (q, a, b, x, s, t) {
	return iadd(bit_rol(iadd(iadd(a, q), iadd(x, t)), s),b);
}
function f  (a, b, c, d, x, s, t) {
	return m((b & c) | ((~b) & d), a, b, x, s, t);
}
function g  (a, b, c, d, x, s, t) {
	return m((b & d) | (c & (~d)), a, b, x, s, t);
}
function h  (a, b, c, d, x, s, t) {
	return m(b ^ c ^ d, a, b, x, s, t);
}
function j  (a, b, c, d, x, s, t) {
	return m(c ^ (b | (~d)), a, b, x, s, t);
}

function binl_md5(x, l) {
	var a =  1732584193,
		b = -271733879,
		c = -1732584194,
		d =  271733878,
		u,
		v,
		w,
		y,
		n,
		i;
	x[l >> 5] |= 0x80 << ((l) % 32);
	x[(((l + 64) >>> 9) << 4) + 14] = l;
	for (i = 0, n = x.length; i < n; i += 16) {
		u = a;
		v = b;
		w = c;
		y = d;
		a = f(a, b, c, d, x[i +  0], 7 , -680876936 );
		d = f(d, a, b, c, x[i +  1], 12, -389564586 );
		c = f(c, d, a, b, x[i +  2], 17,  606105819 );
		b = f(b, c, d, a, x[i +  3], 22, -1044525330);
		a = f(a, b, c, d, x[i +  4], 7 , -176418897 );
		d = f(d, a, b, c, x[i +  5], 12,  1200080426);
		c = f(c, d, a, b, x[i +  6], 17, -1473231341);
		b = f(b, c, d, a, x[i +  7], 22, -45705983  );
		a = f(a, b, c, d, x[i +  8], 7 ,  1770035416);
		d = f(d, a, b, c, x[i +  9], 12, -1958414417);
		c = f(c, d, a, b, x[i + 10], 17, -42063     );
		b = f(b, c, d, a, x[i + 11], 22, -1990404162);
		a = f(a, b, c, d, x[i + 12], 7 ,  1804603682);
		d = f(d, a, b, c, x[i + 13], 12, -40341101  );
		c = f(c, d, a, b, x[i + 14], 17, -1502002290);
		b = f(b, c, d, a, x[i + 15], 22,  1236535329);
		a = g(a, b, c, d, x[i +  1], 5 , -165796510 );
		d = g(d, a, b, c, x[i +  6], 9 , -1069501632);
		c = g(c, d, a, b, x[i + 11], 14,  643717713 );
		b = g(b, c, d, a, x[i +  0], 20, -373897302 );
		a = g(a, b, c, d, x[i +  5], 5 , -701558691 );
		d = g(d, a, b, c, x[i + 10], 9 ,  38016083  );
		c = g(c, d, a, b, x[i + 15], 14, -660478335 );
		b = g(b, c, d, a, x[i +  4], 20, -405537848 );
		a = g(a, b, c, d, x[i +  9], 5 ,  568446438 );
		d = g(d, a, b, c, x[i + 14], 9 , -1019803690);
		c = g(c, d, a, b, x[i +  3], 14, -187363961 );
		b = g(b, c, d, a, x[i +  8], 20,  1163531501);
		a = g(a, b, c, d, x[i + 13], 5 , -1444681467);
		d = g(d, a, b, c, x[i +  2], 9 , -51403784  );
		c = g(c, d, a, b, x[i +  7], 14,  1735328473);
		b = g(b, c, d, a, x[i + 12], 20, -1926607734);
		a = h(a, b, c, d, x[i +  5], 4 , -378558    );
		d = h(d, a, b, c, x[i +  8], 11, -2022574463);
		c = h(c, d, a, b, x[i + 11], 16,  1839030562);
		b = h(b, c, d, a, x[i + 14], 23, -35309556  );
		a = h(a, b, c, d, x[i +  1], 4 , -1530992060);
		d = h(d, a, b, c, x[i +  4], 11,  1272893353);
		c = h(c, d, a, b, x[i +  7], 16, -155497632 );
		b = h(b, c, d, a, x[i + 10], 23, -1094730640);
		a = h(a, b, c, d, x[i + 13], 4 ,  681279174 );
		d = h(d, a, b, c, x[i +  0], 11, -358537222 );
		c = h(c, d, a, b, x[i +  3], 16, -722521979 );
		b = h(b, c, d, a, x[i +  6], 23,  76029189  );
		a = h(a, b, c, d, x[i +  9], 4 , -640364487 );
		d = h(d, a, b, c, x[i + 12], 11, -421815835 );
		c = h(c, d, a, b, x[i + 15], 16,  530742520 );
		b = h(b, c, d, a, x[i +  2], 23, -995338651 );
		a = j(a, b, c, d, x[i +  0], 6 , -198630844 );
		d = j(d, a, b, c, x[i +  7], 10,  1126891415);
		c = j(c, d, a, b, x[i + 14], 15, -1416354905);
		b = j(b, c, d, a, x[i +  5], 21, -57434055  );
		a = j(a, b, c, d, x[i + 12], 6 ,  1700485571);
		d = j(d, a, b, c, x[i +  3], 10, -1894986606);
		c = j(c, d, a, b, x[i + 10], 15, -1051523   );
		b = j(b, c, d, a, x[i +  1], 21, -2054922799);
		a = j(a, b, c, d, x[i +  8], 6 ,  1873313359);
		d = j(d, a, b, c, x[i + 15], 10, -30611744  );
		c = j(c, d, a, b, x[i +  6], 15, -1560198380);
		b = j(b, c, d, a, x[i + 13], 21,  1309151649);
		a = j(a, b, c, d, x[i +  4], 6 , -145523070 );
		d = j(d, a, b, c, x[i + 11], 10, -1120210379);
		c = j(c, d, a, b, x[i +  2], 15,  718787259 );
		b = j(b, c, d, a, x[i +  9], 21, -343485551 );
		a = iadd(a, u);
		b = iadd(b, v);
		c = iadd(c, w);
		d = iadd(d, y);
	}
	return [a, b, c, d];
}

return function (s, k, x, e) {
	var f = utf16to8;
	s = f(s);
	k = k != undefined ? rstr_hmac_md5(f(k), s) : rstr_md5(s);
	return x > 0 ? (e != undefined ? rstr2any(k, e) : k) : x < 0 ? rawToBase64(k) : rawToHex(k);
};

});

/**
* 应用 MD5 算法为字符串创建信息摘要。
* @see {@link Sumi.Hash.rmd160}
* @see {@link http://pajhome.org.uk/crypt/}
* @access public
* @func Sumi.Hash.md5
* @param {string} str - 输入文本
* @param {string} [key=undefined] - 密钥
* @param {number} [type＝0] - 正数则启用 encoding 参数。负数则生成 Base64 编码字符串。默认生成十六进制编码字符串
* @param {string} [encoding=undefined] - 如果指定了本参数则作为编码字符串使用。否则则直接返回原始字符串
* @returns {string}
* @example
* console.log(Sumi.Hash.md5('12081977')     === 'dfd8c10c1b9b58c8bf102225ae3be9eb');
* console.log(Sumi.Hash.md5('monkey')       === 'd0763edaa9d9bd2a9516280e9044d885');
* console.log(Sumi.Hash.md5('message')      === '78e731027d8fd50ed642340b7c9a63b3');
* console.log(Sumi.Hash.md5('value')        === '2063c1608d6e0baf80249c42e2be5804');
* console.log(Sumi.Hash.md5('value', 'key') === '01433efd5f16327ea4b31144572c67f6');
*/
	
