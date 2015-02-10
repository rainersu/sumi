
define(
[
	'./util/hexdec',
	'./util/substr',
	'../crypto/md5'
]
, function (
	hexdec, 
	substr, 
	md5
) 
{'use strict';

return function (ns, name) {
	return substr( md5(hexdec(ns) + name));
};

});

/**
* 使用 MD5 算法生成一个符合 RFC4122,v3 规则的 UUID(Universally Unique IDentifier)。
* @see {@link Sumi.Crypto.md5}
* @access public
* @func Sumi.UUID.v3
* @param {string} ns - 命名空间的 UUID
* @param {string} name - 要编码的URL 或 DNS
* @returns {string}
* @example
* console.log(Sumi.UUID.v3('00000000-0000-0000-0000-000000000000', 'google'));
* console.log(Sumi.UUID.v3('6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'google.com'));
*/
