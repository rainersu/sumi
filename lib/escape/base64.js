
define(
[
	'../var/fromCC'
]
, function (
	f
) 
{'use strict';

var b64chr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	b64tab = {},
	l = 64;

for (; l--;) b64tab[b64chr.charAt(l)] = l;

function w (w) {
    var b = b64chr,
		h = w.length,
		l = [0, 2, 1][h % 3],
		r = w.charCodeAt(0) << 16 | 
			((h > 1 ? w.charCodeAt(1) : 0) << 8) | 
			((h > 2 ? w.charCodeAt(2) : 0));
    return b.charAt( r >>> 18) + b.charAt((r >>> 12) & 63) +
			(l >= 2 ? '=' : b.charAt((r >>> 6) & 63)) +
			(l >= 1 ? '=' : b.charAt(r & 63));
}

function m (c) {
	var m = c.charCodeAt(0);
	if (c.length < 2) {
		return m < 0x80  ? c : 
		       m < 0x800 ? (f(0xc0 | (m >>>  6)) + f(0x80 | (m & 0x3f))) : (
				   f(0xe0 | ((m >>> 12) & 0x0f)) + 
		           f(0x80 | ((m >>>  6) & 0x3f)) + 
		           f(0x80 | ( m         & 0x3f))
			   );
	} 
	else {
		m = 0x10000 + (m - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
		return (
			f(0xf0 | ((m >>> 18) & 0x07)) + 
			f(0x80 | ((m >>> 12) & 0x3f)) + 
			f(0x80 | ((m >>>  6) & 0x3f)) + 
			f(0x80 | ( m         & 0x3f))
		);
	}
}

function x (x) {
	return x === '+' ? '-' : x === '/' ? '_' : '';
}

function e (u, b) {
	u = ('' + u).replace(
		/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, m
	).replace(
		/[\s\S]{1,3}/g, w
	);
    return b ? u.replace(/[+\/=]/g, x) : u;
}

function q (q) {
    switch (q.length) {
    case 4:
        var c = ((0x07 & q.charCodeAt(0)) << 18) |    
				((0x3f & q.charCodeAt(1)) << 12) |
				((0x3f & q.charCodeAt(2)) <<  6) |
				 (0x3f & q.charCodeAt(3)),
        	t = c - 0x10000;
		return (f((t >>> 10) + 0xD800) + f((t & 0x3FF) + 0xDC00));
    case 3:
        return f(
            ((0x0f & q.charCodeAt(0)) << 12) | 
			((0x3f & q.charCodeAt(1)) <<  6) |  
			 (0x3f & q.charCodeAt(2))
        );
    default:
        return f(
            ((0x1f & q.charCodeAt(0)) <<  6) |  
			 (0x3f & q.charCodeAt(1))
        );
    }
}

function p (p) {
	var b = b64tab,
		h = p.length,
		l = h % 4,
		n = (h > 0 ? b[p.charAt(0)] << 18 : 0) | 
			(h > 1 ? b[p.charAt(1)] << 12 : 0) | 
			(h > 2 ? b[p.charAt(2)] <<  6 : 0) | 
			(h > 3 ? b[p.charAt(3)]       : 0),
		c = [
			f( n >>> 16),
			f((n >>>  8) & 0xff),
			f( n         & 0xff)
		];
	c.length -= [0, 0, 2, 1][l];
	return c.join('');
}

function y (x) {
	return x === '-' ? '+' : '/';
}

function d (a) {
	return (
		'' + a
	).replace(
		/[-_]/g, y
	).replace(
		/[^A-Za-z0-9\+\/]/g, ''
	).replace(
		/[\s\S]{1,4}/g, p
	).replace(
		/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, q
	);
};

return {
	decode    : d,
	encode    : e,
	decodeURI : d,
	encodeURI : function (u) { return e(u, true); }
};

});

/**
* 将字符串编译成 {@link http://zh.wikipedia.org/wiki/Base64 Base64} 格式的ASCII字符序列文本。
* @see {@link Sumi.Escape.decodeBase64}
* @see {@link Sumi.Escape.encodeBase64URI}
* @see {@link Sumi.Escape.decodeBase64URI}
* @see {@link http://zh.wikipedia.org/wiki/Base64}
* @access public
* @func Sumi.Escape.encodeBase64
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeBase64('foo © bar 𝌆 baz'));
* // Zm9vIMKpIGJhciDwnYyGIGJheg==
* 
* console.log(Sumi.Escape.decodeBase64('Zm9vIMKpIGJhciDwnYyGIGJheg=='));
* // foo © bar 𝌆 baz
*/

/**
* 从{@link http://zh.wikipedia.org/wiki/Base64 Base64} 格式的ASCII字符序列文本还原出字符串。
* @see {@link Sumi.Escape.encodeBase64}
* @see {@link Sumi.Escape.encodeBase64URI}
* @see {@link Sumi.Escape.decodeBase64URI}
* @see {@link http://zh.wikipedia.org/wiki/Base64}
* @access public
* @func Sumi.Escape.decodeBase64
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeBase64('dankogai'));
* // ZGFua29nYWk=
* 
* console.log(Sumi.Escape.decodeBase64('ZGFua29nYWk='));
* // dankogai
*/

/**
* 将统一资源标识符（{@link http://zh.wikipedia.org/wiki/URI|Uniform Resource Identifier}) 编译成 {@link http://zh.wikipedia.org/wiki/Base64 Base64} 格式的ASCII字符序列文本。
* @see {@link Sumi.Escape.encodeBase64}
* @see {@link Sumi.Escape.decodeBase64}
* @see {@link Sumi.Escape.decodeBase64URI}
* @see {@link http://zh.wikipedia.org/wiki/Base64}
* @access public
* @func Sumi.Escape.encodeBase64URI
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeBase64('小飼弾'));   
* // 5bCP6aO85by+
* 
* console.log(Sumi.Escape.decodeBase64('5bCP6aO85by+'));   
* // 小飼弾
* 
* console.log(Sumi.Escape.encodeBase64URI('小飼弾'));
* // 5bCP6aO85by-
* 
* console.log(Sumi.Escape.decodeBase64URI('5bCP6aO85by-'));
* // 小飼弾
*/


/**
* 从 {@link http://zh.wikipedia.org/wiki/Base64 Base64} 格式的ASCII字符序列文本还原出统一资源标识符（{@link http://zh.wikipedia.org/wiki/URI|Uniform Resource Identifier}) 。
* @see {@link Sumi.Escape.encodeBase64}
* @see {@link Sumi.Escape.decodeBase64}
* @see {@link Sumi.Escape.encodeBase64URI}
* @see {@link http://zh.wikipedia.org/wiki/Base64}
* @access public
* @func Sumi.Escape.decodeBase64URI
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeBase64('小飼弾'));   
* // 5bCP6aO85by+
* 
* console.log(Sumi.Escape.decodeBase64('5bCP6aO85by+'));   
* // 小飼弾
* 
* console.log(Sumi.Escape.encodeBase64URI('小飼弾'));
* // 5bCP6aO85by-
* 
* console.log(Sumi.Escape.decodeBase64URI('5bCP6aO85by-'));
* // 小飼弾
*/
