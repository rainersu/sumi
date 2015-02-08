
define([
	'../../array/dim',
	'../../math/iadd',
	'./util/fromCharCode',
	'./util/bit_rol',
	'./util/str2rstr_utf8',
	'./util/str2rstr_utf16le',
	'./util/str2rstr_utf16be',
	'./util/rstr2any',
	'./util/rstr2b64',
	'./util/rstr2hex',
	'./util/rstr2binl',
	'./util/binl2rstr'
], function (
	M, A, F,
	bit_rol, 
	str2rstr_utf8, 
	str2rstr_utf16le, 
	str2rstr_utf16be, 
	rstr2any,
	rstr2b64,
	rstr2hex,
	rstr2binl,
	binl2rstr
) {
	
/*
* Calculate the MD5 of a raw string
*/
function rstr_md5 (s) {
	return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}
/*
* Calculate the HMAC-MD5, of a key and some data (raw strings)
*/
function rstr_hmac_md5 (key, data) {
	var bkey = rstr2binl(key),
		ipad = new Array(16), 
		opad = new Array(16),
		hash;
	if(bkey.length > 16) bkey = binl_md5(bkey, key.length * 8);
	for(var i = 0; i < 16; i++) {
		ipad[i] = bkey[i] ^ 0x36363636;
		opad[i] = bkey[i] ^ 0x5C5C5C5C;
	}
	hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
	return binl2rstr(binl_md5(opad.concat(hash),  512 + 128));
}

function md5_cmn (q, a, b, x, s, t) {
	return A(bit_rol(A(A(a, q), A(x, t)), s),b);
}
function md5_ff  (a, b, c, d, x, s, t) {
	return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg  (a, b, c, d, x, s, t) {
	return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh  (a, b, c, d, x, s, t) {
	return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii  (a, b, c, d, x, s, t) {
	return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function binl_md5(x, len) {
	var l =  len,
		a =  1732584193,
		b = -271733879,
		c = -1732584194,
		d =  271733878,
		olda,
		oldb,
		oldc,
		oldd,
		n,
		i;
	x[l >> 5] |= 0x80 << ((l) % 32);
	x[(((l + 64) >>> 9) << 4) + 14] = l;
	for (i = 0, n = x.length; i < n; i += 16) {
		
		olda = a;
		oldb = b;
		oldc = c;
		oldd = d;
		
		a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
		d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
		c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
		b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
		a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
		d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
		c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
		b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
		a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
		d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
		c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
		b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
		a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
		d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
		c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
		b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

		a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
		d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
		c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
		b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
		a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
		d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
		c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
		b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
		a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
		d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
		c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
		b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
		a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
		d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
		c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
		b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

		a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
		d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
		c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
		b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
		a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
		d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
		c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
		b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
		a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
		d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
		c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
		b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
		a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
		d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
		c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
		b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

		a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
		d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
		c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
		b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
		a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
		d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
		c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
		b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
		a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
		d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
		c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
		b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
		a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
		d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
		c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
		b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

		a = A(a, olda);
		b = A(b, oldb);
		c = A(c, oldc);
		d = A(d, oldd);
		
	}
	return Array(a, b, c, d);
}

return function (s, k, x, e) {
	var f = str2rstr_utf8;
	s = f(s);
	k = k ? rstr_hmac_md5(f(k), s) : rstr_md5(s);
	return x > 0 ? (e ? rstr2any(k, e) : k) : x < 0 ? rstr2b64(k) : rstr2hex(k);
};

});

/**
* 应用 MD5 算法为字符串创建信息摘要。
* @see {@link Crypto.rmd160}
* @access public
* @func Crypto.md5
* @param {string} str - 输入文本
* @param {string} [key] - 密钥
* @param {number} [type＝0] - 正数则启用 encoding 参数。负数则生成Base64编码字符串。默认生成十六进制编码字符串
* @param {string} [encoding] - 如果指定了本参数则作为编码字符串使用。否则则直接返回原始字符串
* @returns {string}
* @example
* console.log(Crypto.md5('value'));             // 2063c1608d6e0baf80249c42e2be5804
* console.log(Crypto.md5('value', 'key'));      // 01433efd5f16327ea4b31144572c67f6
* console.log(Crypto.md5('abc').toLowerCase()); // 900150983cd24fb0d6963f7d28e17f72
*/
	