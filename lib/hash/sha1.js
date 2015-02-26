
define(
[
	'../math/iadd',
	'../var/fromCC',
	'./util/rol',
	'./util/b64'
], function (
	iadd, 
	fromCC, 
	rol,
	b64
) 
{'use strict';

var hexcase = 0,      /* 为 0 则使用小写字母。为 1 则使用大写字母 */
	b64pad  = '',     /* 指定 base-64 编码格式填充字符 */
	chrsz   = 8;      /* 为 8 则认定为 ASCII 字符集。为 16 则认定为 Unicode 字符集 */

function binb2str (bin) {
	var b = bin,
		c = chrsz,
		s = "",
		m = (1 << c) - 1,
		i = 0,
		l = b.length * 32;
	for(; i < l; i += c) {
		s+= fromCC((b[i >> 5] >>> (32 - c - i % 32)) & m);
	}
	return s;
}

function str2binb (str) {
	var s = str,
		b = [],
		c = chrsz,
		m = (1 << c) - 1,
		l = s.length * c,
		i = 0;
	for(; i < l; i += c) {
		b[i >> 5]|= (s.charCodeAt(i / c) & m) << (32 - c - i % 32);
	}
	return b;
}

function sha1_ft (t, b, c, d) {
	return t < 20 ? (b & c) | ((~b) & d) :
		   t < 40 ?  b ^ c ^ d :
		   t < 60 ? (b & c) | (b & d) | (c & d) : b ^ c ^ d;
}

function sha1_kt (t) {
	return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
}

function core_sha1 (x, len) {
	var w = Array(80),
		a =  1732584193,
		b = -271733879,
		c = -1732584194,
		d =  271733878,
		e = -1009589776,
		l = len,
		i = 0,
		j,
		t,
		olda,
		oldb,
		oldc,
		oldd,
		olde;
	x[l >> 5]|= 0x80 << (24 - l % 32);
	x[((l + 64 >> 9) << 4) + 15]  = l;
	for(; i < x.length; i+= 16) {
		olda = a;
		oldb = b;
		oldc = c;
		oldd = d;
		olde = e;
		for(j = 0; j < 80; j++) {
			w[j] = j < 16 ? x[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
			t = iadd(iadd(rol(a, 5), sha1_ft(j, b, c, d)), iadd(iadd(e, w[j]), sha1_kt(j)));
			e = d;
			d = c;
			c = rol(b, 30);
			b = a;
			a = t;
		}
		a = iadd(a, olda);
		b = iadd(b, oldb);
		c = iadd(c, oldc);
		d = iadd(d, oldd);
		e = iadd(e, olde);
	}
	return [a, b, c, d, e];
}

function core_hmac_sha1 (key, data) {
	var k = key,
		d = data,
		b = str2binb(k),
		c = chrsz,
		f = core_sha1,
		p = [], 
		o = [],
		i = 0,
		s;
	if (b.length > 16) {
		b = f(b, k.length * c);
	}
	for(; i < 16; i++) {
		s = b[i];
		p[i] = s ^ 0x36363636;
		o[i] = s ^ 0x5C5C5C5C;
	}
	return f(o.concat(f(p.concat(str2binb(d)), 512 + d.length * c)), 512 + 160);
}

function binb2hex (bin) {
	var b = bin,
		l = b.length * 4,
		h = hexcase ? "0123456789ABCDEF" : "0123456789abcdef",
		s = "",
		i = 0;
	for(; i < l; i++) {
		s+= h.charAt((b[i >>2 ] >> ((3 - i % 4) * 8 + 4)) & 0xF) + h.charAt((b[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
	}
	return s;
}

function binb2b64 (bin) {
	var b = bin,
		l = b.length,
		x = l *  4,
		y = l * 32,
		s = '',
		i = 0,
		j,
		t;
	for(; i < x; i+= 3) {
		t = (((b[i >> 2]     >> 8 * (3 -  i % 4)) & 0xFF)          << 16) | 
			(((b[i + 1 >> 2] >> 8 * (3 - (i + 1)  %    4)) & 0xFF) <<  8) |
			(( b[i + 2 >> 2] >> 8 * (3 - (i + 2)  %    4)) & 0xFF);
		for(j = 0; j < 4; j++) {
			s+= i * 8 + j * 6 > y ? b64pad : b64.charAt((t >> 6 * (3 - j)) & 0x3F);
		}
	}
	return s;
}

return function (s, k, x) {
	k = k != undefined ? core_hmac_sha1(k, s) : core_sha1(str2binb(s), s.length * chrsz);
	return (x > 1 ? binb2str : x > 0 ? binb2b64 : binb2hex)(k);
};

});

/**
* 应用 {@link http://en.wikipedia.org/wiki/SHA-1 SHA1} 算法为字符串创建信息摘要。
* @see {@link Sumi.Hash.uuid5}
* @see {@link Sumi.Hash.sha256}
* @see {@link Sumi.Hash.sha512}
* @see {@link Sumi.Hash.md5}
* @see {@link Sumi.Hash.rmd160}
* @see {@link http://pajhome.org.uk/crypt/}
* @see {@link http://zh.wikipedia.org/wiki/SHA_%E5%AE%B6%E6%97%8F}
* @access public
* @func Sumi.Hash.sha1
* @param {string} str - 输入文本
* @param {string} [key=undefined] - 密钥
* @param {number} [type=0]
* @param {number} type.0 - 生成十六进制编码字符串
* @param {number} type.1 - 生成 {@link http://zh.wikipedia.org/wiki/Base64 Base64} 编码字符串
* @param {number} type.2 - 返回原始字符串
* @returns {string}
* @example
* console.log(Sumi.Hash.sha1('abc')        === 'a9993e364706816aba3e25717850c26c9cd0d89d');
* console.log(Sumi.Hash.sha1('abc', 'key') === '4fd0b215276ef12f2b3e4c8ecac2811498b656fc');
*/



