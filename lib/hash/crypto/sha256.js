
define(
[
	'../../../array/dim',
	'../../../math/iadd',
	'./util/fromCharCode',
	'./util/str2rstr_utf8',
	'./util/str2rstr_utf16le',
	'./util/str2rstr_utf16be',
	'./util/rstr2any',
	'./util/rstr2b64',
	'./util/rstr2hex'
]
, function (
	dim, 
	iadd, 
	fromCharCode, 
	str2rstr_utf8,
	str2rstr_utf16le,
	str2rstr_utf16be,
	rstr2any,
	rstr2b64,
	rstr2hex
) 
{'use strict';

var sha256_K = [
		 1116352408,  1899447441, -1245643825, -373957723,   961987163,   1508970993,
		-1841331548, -1424204075, -670586216,   310598401,   607225278,   1426881987,
		 1925078388, -2132889090, -1680079193, -1046744716, -459576895,  -272742522,
		 264347078,   604807628,   770255983,   1249150122,  1555081692,  1996064986,
		-1740746414, -1473132947, -1341970488, -1084653625, -958395405,  -710438585,
		 113926993,   338241895,   666307205,   773529912,   1294757372,  1396182291,
		 1695183700,  1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
		-1035236496, -949202525,  -778901479,  -694614492,  -200395387,   275423344,
		 430227734,   506948616,   659060556,   883997877,   958139571,   1322822218,
		 1537002063,  1747873779,  1955562222,  2024104815, -2067236844, -1933114872,
		-1866530822, -1538233109, -1090935817, -965641998
	];

function binb_sha256 (m, l) {
	var H = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
		W = new Array(64),
		a, 
		b, 
		c, 
		d, 
		e, 
		f, 
		g, 
		h,
		i = 0,  
		j,
		x,
		T1, 
		T2;
	m[l >> 5]|= 0x80 << (24 - l % 32);
	m[((l + 64 >> 9) << 4) + 15]  = l;
	for(x =m.length; i < x; i+= 16) {
		a = H[0];
		b = H[1];
		c = H[2];
		d = H[3];
		e = H[4];
		f = H[5];
		g = H[6];
		h = H[7];
		for(j = 0; j < 64; j++) {
			W[j] = j < 16 ? m[j + i] : iadd(iadd(iadd(sha256_Gamma1256(W[j - 2]), W[j - 7]), sha256_Gamma0256(W[j - 15])), W[j - 16]);
			T1 = iadd(iadd(iadd(iadd(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)), sha256_K[j]), W[j]);
			T2 = iadd(sha256_Sigma0256(a), sha256_Maj(a, b, c));
			h = g;
			g = f;
			f = e;
			e = iadd( d, T1);
			d = c;
			c = b;
			b = a;
			a = iadd(T1, T2);
		}
		H[0] = iadd(a, H[0]);
		H[1] = iadd(b, H[1]);
		H[2] = iadd(c, H[2]);
		H[3] = iadd(d, H[3]);
		H[4] = iadd(e, H[4]);
		H[5] = iadd(f, H[5]);
		H[6] = iadd(g, H[6]);
		H[7] = iadd(h, H[7]);
	}
	return H;
}

function rstr2binb (input) {
	var t = input,
		l = t.length,
		o = dim(l >> 2, 0),
		i = 0;
	l*= 8;
	for(; i < l; i+= 8) {
		o[i >> 5] |= (t.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
	}
	return o;
}

function binb2rstr (input) {
	var t = input,
		l = t.length * 32,
		o = '',
		i = 0;
	for(; i < l; i+= 8) {
		o+= fromCharCode((t[i >> 5] >>> (24 - i % 32)) & 0xFF);
	}
	return o;
}

function rstr_sha256 (s) {
	return binb2rstr(binb_sha256(rstr2binb(s), s.length * 8));
}

function rstr_hmac_sha256 (key, data) {
	var k = key,
		b = rstr2binb(k),
		p = new Array(16),
		o = new Array(16),
		i = 0;
	if (b.length > 16) {
		b = binb_sha256(b, k.length * 8);
	}
	for(; i < 16; i++) {
		k = b[i];
		p[i] = k ^ 0x36363636;
		o[i] = k ^ 0x5C5C5C5C;
	}
	return binb2rstr(binb_sha256(o.concat(binb_sha256(p.concat(rstr2binb(data)), 512 + data.length * 8)), 512 + 256));
}

function sha256_S (X, n) {
	return ( X >>> n ) | (X << (32 - n));
}
function sha256_R (X, n) {
	return ( X >>> n );
}
function sha256_Ch (x, y, z) {
	return ((x & y) ^ ((~x) & z));
}
function sha256_Maj (x, y, z) {
	return ((x & y) ^ (x & z) ^ (y & z));
}
function sha256_Sigma0256 (x) {
	return (sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22));
}
function sha256_Sigma1256 (x) {
	return (sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25));
}
function sha256_Gamma0256 (x) {
	return (sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3));
}
function sha256_Gamma1256 (x) {
	return (sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10));
}
function sha256_Sigma0512 (x) {
	return (sha256_S(x, 28) ^ sha256_S(x, 34) ^ sha256_S(x, 39));
}
function sha256_Sigma1512 (x) {
	return (sha256_S(x, 14) ^ sha256_S(x, 18) ^ sha256_S(x, 41));
}
function sha256_Gamma0512 (x) {
	return (sha256_S(x, 1)  ^ sha256_S(x, 8) ^ sha256_R(x, 7));
}
function sha256_Gamma1512 (x) {
	return (sha256_S(x, 19) ^ sha256_S(x, 61) ^ sha256_R(x, 6));
}

return function (s, k, x, e) {
	var f = str2rstr_utf8;
	s = f(s);
	k = k ? rstr_hmac_sha256(f(k), s) : rstr_sha256(s);
	return x > 0 ? (e ? rstr2any(k, e) : k) : x < 0 ? rstr2b64(k) : rstr2hex(k);
};

});

/**
* 应用 SHA256 算法为字符串创建信息摘要。
* @see {@link Sumi.Crypto.sha1}
* @see {@link Sumi.Crypto.sha512}
* @access public
* @func Sumi.Crypto.sha256
* @param {string} str - 输入文本
* @param {string} [key] - 密钥
* @param {number} [type＝0] - 正数则启用 encoding 参数。负数则生成 Base64 编码字符串。默认生成十六进制编码字符串
* @param {string} [encoding] - 如果指定了本参数则作为编码字符串使用。否则则直接返回原始字符串
* @returns {string}
* @example
* console.log(Sumi.Crypto.sha256("abc")); 
* // ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
*
* console.log(Sumi.Crypto.sha256('abc', 'key'));        
* // 9c196e32dc0175f86f4b1cb89289d6619de6bee699e4c378e68309ed97a1a6ab
*/