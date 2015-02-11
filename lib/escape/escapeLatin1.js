
define(
[
	'../core/unzip'
]
, function (
	unzip
) 
{'use strict';

var r = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
	a = unzip(
		'\xc0:A,\xc1:A,\xc2:A,\xc3:A,\xc4:A,\xc5:A,' +
		'\xe0:a,\xe1:a,\xe2:a,\xe3:a,\xe4:a,\xe5:a,' +
		'\xc7:C,\xe7:c,' +
		'\xd0:D,\xf0:d,' +
		'\xc8:E,\xc9:E,\xca:E,\xcb:E,' +
		'\xe8:e,\xe9:e,\xea:e,\xeb:e,' +
		'\xcC:I,\xcd:I,\xce:I,\xcf:I,' +
		'\xeC:i,\xed:i,\xee:i,\xef:i,' +
		'\xd1:N,\xf1:n,' +
		'\xd2:O,\xd3:O,\xd4:O,\xd5:O,\xd6:O,\xd8:O,' +
		'\xf2:o,\xf3:o,\xf4:o,\xf5:o,\xf6:o,\xf8:o,' +
		'\xd9:U,\xda:U,\xdb:U,\xdc:U,' +
		'\xf9:u,\xfa:u,\xfb:u,\xfc:u,' +
		'\xdd:Y,\xfd:y,\xff:y,' +
		'\xc6:Ae,\xe6:ae,' +
		'\xde:Th,\xfe:th,' +
		'\xdf:ss',
		',:',
		true
	);

return function (s) {
	return ('' + s).replace(r, function(b) {
		return a[b] || b;
	});
};

});

/**
* 将字符串中的西欧字符 (Latin-1 Supplement) 用无变音符号的基本拉丁字母替代。
* @see {@link Sumi.Escape.stripCombiningMarks}
* @see {@link https://en.wikipedia.org/wiki/Latin-1_Supplement_%28Unicode_block%29#Character_table}
* @access public
* @func Sumi.Escape.escapeLatin1
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.escapeLatin1('déjà vu'));      // deja vu
*/
