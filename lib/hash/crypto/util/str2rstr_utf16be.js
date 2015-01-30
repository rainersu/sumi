
define([
	'./fromCharCode'
], function (F) {
	
/*
* Encode a string as utf-16
*/
return function (input) {
	var i = input,
		o = '',
		n = 0,
		l = i.length,
		x;
	for(; n < l; n++) {
		x = i.charCodeAt(n);
		o+= F((x >>> 8) & 0xFF, x & 0xFF);
	}
	return o;
};

});
