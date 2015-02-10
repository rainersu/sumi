
define(
[
	'../../var/global',
	'../../core/type',
	'../crypto/md5',
	'../crypto/sha1',
	'./util/hexdec',
	'./util/substr'
]
, function (
	global, 
	type, 
	md5, 
	sha1, 
	hexdec, 
	substr
) 
{'use strict';
	
var rng = 
	(
		function () {
			var crb = new Array(16),
				crt = global.crypto || global.msCrypto;
			if (crt = crt && crt.getRandomValues) {
				if (global.Uint8Array) {
					crb = new Uint8Array(16);
					return function () {
				        crt(crb);
				        return crb;
					};
				}
			}
			else try {
				crt = requirejs('crypto').randomBytes;
				return function () {
					return crt(16);
				};
			}
			catch (e) {}
			return function () {
				for (var i = 0, r; i < 16; i++) {
					if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
					crb[i] = r >>> ((i & 0x03) << 3) & 0xff;
				}
				return crb;
			};
		}
	)(),
	BufferClass = global.Buffer || global.ArrayBuffer || Array,
    byteToHex = [],
    hexToByte = {},
	i,
	bytes = rng(),
	node  = [
		bytes[0] | 0x01,
		bytes[1], bytes[2], bytes[3], bytes[4], bytes[5]
	],
	clock = (bytes[6] << 8 | bytes[7]) & 0x3fff,
	msecs = 0, 
	nsecs = 0;

for (i = 0; i < 256; i++) {
	byteToHex[i] = (i + 0x100).toString(16).substr(1);
	hexToByte[byteToHex[i]] = i;
}

function parse(s, buf, offset) {
	var f = buf || [],
		i = (buf && offset) || 0,
		x = 0,
		h = hexToByte;
	s.toLowerCase().replace(/[0-9a-f]{2}/g, function(o) {
		if (x < 16) {
			f[i + x++] = h[o];
		}
	});
	while (x < 16) {
		f[i + x++] = 0;
	}
	return f;
}

function unparse( buf, offset) {
	var f = buf,
		i = offset >> 0,
		b = byteToHex;
	return  b[f[i++]] + b[f[i++]] +
	        b[f[i++]] + b[f[i++]] + '-' +
	        b[f[i++]] + b[f[i++]] + '-' +
	        b[f[i++]] + b[f[i++]] + '-' +
	        b[f[i++]] + b[f[i++]] + '-' +
	        b[f[i++]] + b[f[i++]] +
	        b[f[i++]] + b[f[i++]] +
	        b[f[i++]] + b[f[i++]];
}

return {
	v1 : function (options, buf, offset) {
		var f = buf,
			i = f && offset || 0,
			b = f || [],
			o = options || {},
			x = o.clock == null,
			c = x ? clock : o.clock,
			m = o.msecs != null ? o.msecs : new Date().getTime(),
			y = o.nsecs == null,
			n = y ? nsecs + 1 : o.nsecs,
			d = m - msecs + n - nsecs / 10000,
			e = o.node || node,
			l,
			h;
		if (d < 0 && x) {
			c = c + 1 & 0x3fff;
		}
		if (y && (d < 0 || m > msecs)) {
			n = 0;
		}
		if (n >= 10000) {
			throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
		}
		msecs = m;
		nsecs = n;
		clock = c;
		m+= 12219292800000;
		l = ((m & 0xfffffff) * 10000 + n) % 0x100000000;
		b[i++] = l >>> 24 & 0xff;
		b[i++] = l >>> 16 & 0xff;
		b[i++] = l >>> 8 & 0xff;
		b[i++] = l & 0xff;
		h = (m / 0x100000000 * 10000) & 0xfffffff;
		b[i++] = h >>> 8 & 0xff;
		b[i++] = h & 0xff;
		b[i++] = h >>> 24 & 0xf | 0x10;
		b[i++] = h >>> 16 & 0xff;
		b[i++] = c >>> 8 | 0x80;
		b[i++] = c & 0xff;
		for (x = 0; x < 6; x++) {
			b[i + x] = e[x];
		}
		return f ? f : unparse(b);
	},
	v3 : function (ns, name) {
		return substr( md5(hexdec(ns) + name));
	},
	v5 : function (ns, name) {
		return substr(sha1(hexdec(ns) + name));
	},
	v4 : function (options, buf, offset) {
		var b = buf,
			i = b && offset || 0,
			o = options,
			r;
		if (type(o) == 'string') {
			b = o == 'binary' ? new BufferClass(16) : null;
			o = null;
		}
		o = o || {};
		r = o.random || (o.rng || rng)();
		r[6] = (r[6] & 0x0f) | 0x40;
		r[8] = (r[8] & 0x3f) | 0x80;
		if (b) {
			for (o = 0; o < 16; o++) {
				b[i + o] = r[o];
			}
		}
		return b || unparse(r);
	},
	parse : parse,
	unparse : unparse
};

});
	
/**
* @namespace Sumi.UUID
* @see {@link Sumi.Math.uuid}
* @see {@link http://github.com/broofa/node-UUID}
* @see {@link https://github.com/LiosK/UUID.js}
* @see {@link http://nodejs.org/docs/v0.6.2/api/crypto.html}
*/
	
/**
* 生成一个符合 RFC4122,v1 规则基于时间戳的 UUID(Universally Unique IDentifier)。
* @access public
* @func Sumi.UUID.v1
* @param {object} [options]
* @param {array}  options.node - 作为 6 个字节数组的 Node Id。默认随机产生
* @param {number} options.clockseq - 取值范围为 0 - 0x3fff 的 RFC clock sequence
* @param {number|date} options.msecs - 自 unix Epoch 开始累计的时间，单位为毫秒。默认为当前时间
* @param {number} options.nsecs - 取值范围为 0-9999 的附加时间, 单位为 100-nanosecond 。如果 msecs 未指定则被忽略
* @param {array|buffer} [buffer] - 要将生成出的 UUID 写入的数组或缓冲字节流
* @param {number} [offset=0] - 写入 buffer 的开始处索引
* @returns {string|buffer}
* @example
* console.log(Sumi.UUID.v1());
* 
* console.log(Sumi.UUID.v1({
*     node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
*     clockseq: 0x1234,
*     msecs: new Date('2011-11-01').getTime(),
*     nsecs: 5678
* }));
* 
* console.log(UUID.v1(null, new Array(32), 0));   // [02 a2 ce 90 14 32 11 e1 85 58 0b 48 8e 4f c1 15])
*/

/**
* 生成一个符合 RFC4122,v4 规则的 UUID(Universally Unique IDentifier)。
* @access public
* @func Sumi.UUID.v4
* @param {object} [options]
* @param {number} options.random - 包含十六个十六进制数字的数组，用于放置生成结果
* @param {function} options.rng - 用于替换默认的随机数发生器
* @param {array|buffer} [buffer] - 要将生成出的 UUID 写入的数组或缓冲字节流
* @param {number} [offset=0] - 写入 buffer 的开始处索引
* @returns {string|buffer}
* @example
* console.log(Sumi.UUID.v4());
* 
* console.log(Sumi.UUID.v4({
*     random: [
*         0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
*         0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
*     ]
* ));
* 
* console.log(UUID.v4(null, new Array(32), 0));
*/

/**
* 使用 MD5 算法生成一个符合 RFC4122,v3 规则的 UUID(Universally Unique IDentifier)。
* @see {@link Sumi.Crypto.md5}
* @access public
* @func Sumi.UUID.v3
* @param {string} ns - 命名空间的 UUID
* @param {string} name - 要编码的URL 或 DNS
* @returns {string}
* @example
* console.log(Sumi.UUID.v3('00000000-0000-0000-0000-000000000000', 'google');
* console.log(Sumi.UUID.v3('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'google.com'));
*/


/**
* 使用 SHA-1 算法生成一个符合 RFC4122,v5 规则的 UUID(Universally Unique IDentifier)。
* @see {@link Sumi.Crypto.sha1}
* @access public
* @func Sumi.UUID.v5
* @param {string} ns - 命名空间的 UUID
* @param {string} name - 要编码的URL 或 DNS
* @returns {string}
* @example
* console.log(Sumi.UUID.v5('00000000-0000-0000-0000-000000000000', 'google');
* console.log(Sumi.UUID.v5('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'google.com'));
*/

/**
* 将 UUID 字符串解析到数组或缓冲字节流。
* @see {@link Sumi.UUID.unparse}
* @access public
* @func Sumi.UUID.parse
* @param {string} UUID - 要解析的 UUID 字符串
* @param {array|buffer} [buffer] - 用于写入的数组或缓冲字节流
* @param {number} [offset=0] - 写入 buffer 的开始处索引
* @returns {array|buffer}
* @example
* console.log(Sumi.UUID.parse('797ff043-11eb-11e1-80d6-510998755d10'));
* console.log(Sumi.UUID.unparse(bytes));
*/

/**
* 从数组或缓冲字节流还原出 UUID 字符串。
* @see {@link Sumi.UUID.parse}
* @access public
* @func Sumi.UUID.unparse
* @param {array|buffer} [buffer] - 用于写入的数组或缓冲字节流
* @param {number} [offset=0] - 读取 buffer 的开始处索引
* @returns {string}
* @example
* console.log(Sumi.UUID.parse('797ff043-11eb-11e1-80d6-510998755d10'));
* console.log(Sumi.UUID.unparse(bytes));
*/
