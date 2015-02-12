
define(
[
	'./util/uuid',
	'./md5'
]
, function (
	uuid,
	md5
) 
{'use strict';

return function (n, d) {
	return uuid (n, d, md5, 3);
};

});

/**
* 使用 {@link http://en.wikipedia.org/wiki/MD5 MD5} 算法生成一个符合 {@link http://www.ietf.org/rfc/rfc4122.txt RFC4122,v3} 规则的 {@link http://zh.wikipedia.org/wiki/UUID UUID(Universally Unique IDentifier)} 。
* @see {@link Sumi.Hash.md5}
* @see {@link Sumi.Hash.uuid1}
* @see {@link Sumi.Hash.uuid4}
* @see {@link Sumi.Hash.uuid5}
* @see {@link https://github.com/rse/pure-uuid}
* @see {@link https://github.com/broofa/node-uuid}
* @access public
* @func Sumi.Hash.uuid3
* @param {string} ns - 命名空间的 UUID
* @param {string} ns.nil     - 00000000-0000-0000-0000-000000000000
* @param {string} ns.ns:DNS  - 6ba7b810-9dad-11d1-80b4-00c04fd430c8
* @param {string} ns.ns:URL  - 6ba7b811-9dad-11d1-80b4-00c04fd430c8
* @param {string} ns.ns:OID  - 6ba7b812-9dad-11d1-80b4-00c04fd430c8
* @param {string} ns.ns:X500 - 6ba7b814-9dad-11d1-80b4-00c04fd430c8
* @param {string} data - 要编码的 URL 或其它文本
* @returns {string}
* @example
* console.log(Sumi.Hash.uuid3('ns:DNS', 'php.net')); 
* // 11a38b9a-b3da-360f-9353-a5a725514269
* 
* console.log(Sumi.Hash.uuid3('ns:DNS', 'php.net') === '11a38b9a-b3da-360f-9353-a5a725514269');
* // true
*/
