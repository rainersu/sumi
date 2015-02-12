
define(
[
	'../array/dim',
	'./md5',
	'./util/ns'
]
, function (
	dim,
	md5,
	map
) 
{'use strict';

function hs2a (str, begin, end, bytes, pos) {
	for (var i = begin; i <= end; i += 2) bytes[pos++] = parseInt(str.substr(i, 2), 16);
}

function mkNum (num, uppercase) {
	var base16 = num.toString(16);
	if (base16.length < 2) base16 = "0" + base16;
	if (uppercase) base16 = base16.toUpperCase();
	return base16;
}

function a2hs (bytes, begin, end, uppercase, str, pos) {
	for (var i = begin; i <= end; i++) str[pos++] = mkNum(bytes[i], uppercase);
	return str;
}
	
function parse (u, str) {
    if (map[str] !== undefined) str = map[str];
    hs2a(str,  0,  7, u,  0);
    hs2a(str,  9, 12, u,  4);
    hs2a(str, 14, 17, u,  6);
    hs2a(str, 19, 22, u,  8);
    hs2a(str, 24, 35, u, 10);
    return u;
}

function format (u) {
	var str = Array(32);
	a2hs(u,  0,  3, false, str,  0);
	str[ 8] = "-";
	a2hs(u,  4,  5, false, str,  9);
	str[13] = "-";
	a2hs(u,  6,  7, false, str, 14);
	str[18] = "-";
	a2hs(u,  8,  9, false, str, 19);
	str[23] = "-";
	a2hs(u, 10, 15, false, str, 24);
	return str.join("");
}

function uuid3 (ns, data) {
	var i;
	var uuid = dim(16, 0x00);
	var input = '';
	var nsUUID = parse(uuid, ns);
	for (i = 0; i < 16; i++) input += String.fromCharCode(nsUUID[i]);
	input += data;
	var s = md5(input, undefined, 2);
	for (i = 0; i < 16; i++) uuid[i] = s.charCodeAt(i);
	uuid[6] &= 0x0F;
	uuid[6] |= (3 << 4); 
	uuid[8] &= 0x3F;
	uuid[8] |= (0x02 << 6);
	return format(uuid);
};

console.log(uuid3('ns:DNS', 'php.net')); // === '11a38b9a-b3da-360f-9353-a5a725514269');
console.log(uuid3('ns:DNS', 'php.net') === '11a38b9a-b3da-360f-9353-a5a725514269');

});

/**
* 使用 MD5 算法生成一个符合 RFC4122,v3 规则的 UUID(Universally Unique IDentifier)。
* @see {@link Sumi.Hash.md5}
* @access public
* @func Sumi.Hash.uuid3
* @param {string} ns - 命名空间的 UUID
* @param {string} data - 要编码的URL 或其它文本
* @returns {string}
* @example
* console.log(Sumi.Hash.uuid3());
*/
