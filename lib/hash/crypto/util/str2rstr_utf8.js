
define(
[
	'./fromCharCode'
]
, function (
	fromCharCode
) 
{'use strict';
	
/*
* Encode a string as utf-8.
* For efficiency, this assumes the input is valid utf-16.
*/
return function (input) {
	var t = input,
		l = t.length,
		o = '',
		i = -1,
		x,
		y;
	while (++i < l) {
		x = t.charCodeAt(i);
		y = i + 1 < l ? t.charCodeAt(i + 1) : 0;
		if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
			x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
			i++;
		}
		o+= x <= 0x7F     ? fromCharCode(x) :
			x <= 0x7FF    ? fromCharCode(0xC0 | ((x >>>  6) & 0x1F), 0x80 | ( x & 0x3F)) :
			x <= 0xFFFF   ? fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>>  6) & 0x3F), 0x80 | ( x & 0x3F)) :
			x <= 0x1FFFFF ? fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | ( x & 0x3F)) : '';
	}	
	return o;
};

});
