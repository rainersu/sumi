
define(
[
	'../var/fromCC'
]
, function (
	fromCC
) 
{'use strict';

var A,
	C,
	X;

function decodeSymbol() {
	var u,
		v,
		x,
		y,
		o;
	if (X > C) {
		throw Error('Invalid byte index');
	}
	if (X == C) {
		return false;
	}
	u = A[X] & 0xFF;
	X++;
	if ((u & 0x80) == 0) {
		return u;
	}
	if ((u & 0xE0) == 0xC0) {
		v = readContinuationByte();
		o = ((u & 0x1F) << 6) | v;
		if (o >= 0x80) {
			return o;
		} else {
			throw Error('Invalid continuation byte');
		}
	}
	if ((u & 0xF0) == 0xE0) {
		v = readContinuationByte();
		x = readContinuationByte();
		o = ((u & 0x0F) << 12) | (v << 6) | x;
		if (o >= 0x0800) {
			checkScalarValue(o);
			return o;
		} 
		else {
			throw Error('Invalid continuation byte');
		}
	}
	if ((u & 0xF8) == 0xF0) {
		v = readContinuationByte();
		x = readContinuationByte();
		y = readContinuationByte();
		o = ((u & 0x0F) << 0x12) | (v << 0x0C) | (x << 0x06) | y;
		if (o >= 0x010000 && o <= 0x10FFFF) {
			return o;
		}
	}
	throw Error('Invalid UTF-8 detected');
}

function readContinuationByte () {
	if (X >= C) {
		throw Error('Invalid byte index');
	}
	var b = A[X] & 0xFF;
	X++;
	if ((b & 0xC0) == 0x80) {
		return b & 0x3F;
	}
	throw Error('Invalid continuation byte');
}

function createByte (c, f) {
	return fromCC(((c >> f) & 0x3F) | 0x80);
}

function checkScalarValue (c) {
	if (c >= 0xD800 && c <= 0xDFFF) {
		throw Error('Lone surrogate U+' + c.toString(16).toUpperCase() + ' is not a scalar value');
	}
}

function encodeCodePoint (c) {
	if ((c & 0xFFFFFF80) == 0) {
		return fromCC(c);
	}
	var y = '';
	if ((c & 0xFFFFF800) == 0) {
		y = fromCC(((c >>  6) & 0x1F) | 0xC0);
	}
	else if ((c & 0xFFFF0000) == 0) {
		checkScalarValue(c);
		y = fromCC(((c >> 12) & 0x0F) | 0xE0);
		y+= createByte(c,  6);
	}
	else if ((c & 0xFFE00000) == 0) {
		y = fromCC(((c >> 18) & 0x07) | 0xF0);
		y+= createByte(c, 12);
		y+= createByte(c,  6);
	}
	y+= fromCC((c & 0x3F) | 0x80);
	return y;
}

function ucs2decode (s) {
	var r = [],
		i = 0,
		l = s.length,
		v,
		e;
	while (i < l) {
		v = s.charCodeAt(i++);
		if (v >= 0xD800 && v <= 0xDBFF && i < l) {
			e = s.charCodeAt(i++);
			if ((e & 0xFC00) == 0xDC00) {
				r.push(((v & 0x3FF) << 10) + (e & 0x3FF) + 0x10000);
			} 
			else {
				r.push(v);
				i--;
			}
		} 
		else {
			r.push(v);
		}
	}
	return r;
}

function ucs2encode (a) {
	var l = a.length,
		i = -1,
		v,
		r = '';
	while (++i < l) {
		v = a[i];
		if (v > 0xFFFF) {
			v-= 0x10000;
			r+= fromCC(v >>> 10 & 0x3FF | 0xD800);
			v = 0xDC00 | v & 0x3FF;
		}
		r+= fromCC(v);
	}
	return r;
}

return  {
	encode : function (s) {
		var c = ucs2decode(s),
			l = c.length,
			i = -1,
			b = '';
		while (++i < l) {
			b += encodeCodePoint(c[i]);
		}
		return b;
	},
	decode : function (s) {
		A = ucs2decode(s);
		C = A.length;
		X = 0;
		var a = [],
			t;
		while ((t = decodeSymbol()) !== false) {
			a.push(t);
		}
		return ucs2encode(a);
	}
};

});

/**
* 将 {@link http://zh.wikibooks.org/wiki/Unicode Unicode} 字符串编译成 {@link http://en.wikipedia.org/wiki/UTF-8 UTF-8} 格式。
* @see {@link Sumi.Escape.decodeUTF8}
* @access public
* @func Sumi.Escape.encodeUTF8
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.encodeUTF8('\xA9') === '\xC2\xA9');
* console.log(Sumi.Escape.encodeUTF8('\uD800\uDC01') === '\xF0\x90\x80\x81');
*/

/**
* 从 {@link http://en.wikipedia.org/wiki/UTF-8 UTF-8} 格式解码出 {@link http://zh.wikibooks.org/wiki/Unicode Unicode} 字符串。
* @see {@link Sumi.Escape.encodeUTF8}
* @access public
* @func Sumi.Escape.decodeUTF8
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.decodeUTF8('\xC2\xA9') === '\xA9');
* console.log(Sumi.Escape.decodeUTF8('\xF0\x90\x80\x81') === '\uD800\uDC01');
*/
