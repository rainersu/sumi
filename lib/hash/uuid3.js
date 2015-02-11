
define(
[
	'./md5'
]
, function (
	md5
) 
{'use strict';

function substr (r) {
	return r.substr( 0, 8) + '-' +
	       r.substr( 8, 4) + '-' +
	       (((parseInt(r.substr(12, 4), 16) & 0x0f) | 0x30)).toString(16) + '-' +
	       (((parseInt(r.substr(16, 4), 16) & 0x3f) | 0x80)).toString(16) + '-' +
	       r.substr(20, 12);
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
	NIL = '00000000-0000-0000-0000-000000000000';
	
function hexdec (ns) {
	var u = ('' + ns || NIL).replace(/\-|\s/g, ''),
		l = u.length,
		r = '',
		i = 0;
	for(; i < l; i+= 2) {
		r+= String.fromCharCode(parseInt(u[i] + u[i + 1], 16));
	}

  return r;
}

function uuid3 (ns, name) {
	return substr( md5(hexdec(ns) + name));
};
function uuid8 (ns, name) {
	return substr( md5(name + hexdec(ns)));
};


var ns = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var dd = 'nodejs.org';

console.log(uuid3(ns, dd));
console.log(uuid8(ns, dd));

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
