
define(
[
	'./util/hexdec',
	'./util/substr',
	'../crypto/sha1'
]
, function (
	hexdec, 
	substr, 
	sha1
) 
{'use strict';

return function (ns, name) {
	return substr(sha1(hexdec(ns) + name));
};

});

/**
* 使用 SHA-1 算法生成一个符合 RFC4122,v5 规则的 UUID(Universally Unique IDentifier)。
* @see {@link Sumi.Crypto.sha1}
* @access public
* @func Sumi.UUID.v5
* @param {string} ns - 命名空间的 UUID
* @param {string} name - 要编码的URL 或 DNS
* @returns {string}
* @example
* console.log(Sumi.UUID.v5('00000000-0000-0000-0000-000000000000', 'google'));
* console.log(Sumi.UUID.v5('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'google.com'));
*/
