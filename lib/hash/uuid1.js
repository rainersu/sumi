
define(
[
	'./util/rng',
	'./util/unparse'
]
, function (
	rng, 
	unparse
) 
{'use strict';

var s = rng(),
	e = [ s[0] | 0x01, s[1], s[2], s[3], s[4], s[5]],
	k = ( s[6] << 8 |  s[7] ) & 0x3fff,
	x = 0, 
	y = 0;
	
return function (o, c, m, n) {
	o = o || e;
	c = c != null ? c : k;
	m = m != null ? m : new Date().getTime();
	n = n != null ? n : y + 1;
	var i = 0,
		z = 6,
		b = [],
		d = (m - x) + (n - y) / 10000,
		t,
		h;
	if (d < 0 && c == null) {
		c = c + 1 & 0x3fff;
	}
	if ((d < 0 || m > x) && n == null) {
		n = 0;
	}
	if (n >= 10000) throw new Error();
	x = m;
	y = n;
	k = c;
	m+= 12219292800000;
	t = ((m & 0xfffffff) * 10000 + n) % 0x100000000;
	b[i++] = t >>> 24 & 0xff;
	b[i++] = t >>> 16 & 0xff;
	b[i++] = t >>> 8 & 0xff;
	b[i++] = t & 0xff;
	h = (m / 0x100000000 * 10000) & 0xfffffff;
	b[i++] = h >>> 8 & 0xff;
	b[i++] = h & 0xff;
	b[i++] = h >>> 24 & 0xf | 0x10;
	b[i++] = h >>> 16 & 0xff;
	b[i++] = c >>> 8 | 0x80;
	b[i++] = c & 0xff;
	for(; z--;) {
		b[i + z] = o[z];
	}
	return unparse(b);
};

});

/**
* 生成一个符合 {@link http://www.ietf.org/rfc/rfc4122.txt RFC4122,v1} 规则的 {@link http://zh.wikipedia.org/wiki/UUID UUID(Universally Unique IDentifier)} 。
* @see {@link Sumi.Hash.uuid3}
* @see {@link Sumi.Hash.uuid4}
* @see {@link Sumi.Hash.uuid5}
* @see {@link https://github.com/rse/pure-uuid}
* @see {@link https://github.com/broofa/node-uuid}
* @access public
* @func Sumi.Hash.uuid1
* @param {array}  [node] - 作为 6 个字节数组的 Node Id。默认随机产生
* @param {number} [clockseq] - 取值范围为 0 - 0x3fff 的 RFC clock sequence
* @param {number|date} [msecs] - 自 unix Epoch 开始累计的时间，单位为毫秒。默认为当前时间
* @param {number} [nsecs] - 取值范围为 0-9999 的附加时间, 单位为 100-nanosecond 。如果 msecs 未指定则被忽略
* @returns {string}
* @example
* console.log(Sumi.Hash.uuid1());
* // b081f471-b1f8-11e4-923b-2deba33cb418
* 
* console.log(Sumi.Hash.uuid1(
*     [ 0x01, 0x23, 0x45, 0x67, 0x89, 0xab ],
*     0x1234,
*     new Date('2011-11-01').getTime(),
*     5678
* ) === '710b962e-041c-11e1-9234-0123456789ab');
*/
