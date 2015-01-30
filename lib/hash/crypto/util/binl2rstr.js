
define([
	'./fromCharCode'
], function (
	F
) {
	
/*
* Convert an array of little-endian words to a string
*/
return function (input) {
	var i = input,
		o = '', 
		n = 0, 
		l = i.length * 32; 
	for(; n < l; n += 8) {
		o += F((i[n >> 5] >>> (n % 32)) & 0xFF);
	}
	return o;
};

});
