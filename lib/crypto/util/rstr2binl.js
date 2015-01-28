
define([
	'../../array/dim'
], function (
	M
) {
	
/*
* Convert a raw string to an array of little-endian words
* Characters >255 have their high-byte silently ignored.
*/
return function (input) {
	var i = input,
		l = i.length,
		o = M(l >> 2, 0),
		n = 0;
	l*= 8;
	for(; n < l; n += 8) {
		o[n >> 5] |= (i.charCodeAt(n / 8) & 0xFF) << (n % 32);
	}
	return o;
};

});
