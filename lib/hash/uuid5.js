
define(
[
	'./util/uuid',
	'./sha1'
]
, function (
	uuid,
	sha1
) 
{'use strict';

return function (n, d) {
	return uuid (n, d, sha1, 5);
};

});

/**
* 使用 {@link http://en.wikipedia.org/wiki/SHA-1 SHA1} 算法生成一个符合 {@link http://www.ietf.org/rfc/rfc4122.txt RFC4122,v1} 规则基于时间戳的 {@link http://zh.wikipedia.org/wiki/UUID UUID(Universally Unique IDentifier)} 。
* @see {@link Sumi.Hash.sha1}
* @see {@link Sumi.Hash.uuid1}
* @see {@link Sumi.Hash.uuid4}
* @see {@link Sumi.Hash.uuid3}
* @see {@link https://github.com/rse/pure-uuid}
* @see {@link https://github.com/broofa/node-uuid}
* @access public
* @func Sumi.Hash.uuid5
* @param {string} ns - 命名空间的 UUID
* @param {string} ns.nil     - 00000000-0000-0000-0000-000000000000
* @param {string} ns.ns:DNS  - 6ba7b810-9dad-11d1-80b4-00c04fd430c8
* @param {string} ns.ns:URL  - 6ba7b811-9dad-11d1-80b4-00c04fd430c8
* @param {string} ns.ns:OID  - 6ba7b812-9dad-11d1-80b4-00c04fd430c8
* @param {string} ns.ns:X500 - 6ba7b814-9dad-11d1-80b4-00c04fd430c8
* @param {string} data - 要编码的 URL 或其它文本
* @returns {string}
* @example
* console.log(Sumi.Hash.uuid5('ns:DNS', 'php.net'));
* // c4a760a8-dbcf-5254-a0d9-6a4474bd1b62
* 
* console.log(Sumi.Hash.uuid5('ns:DNS', 'php.net') === 'c4a760a8-dbcf-5254-a0d9-6a4474bd1b62');
* // true
*/
