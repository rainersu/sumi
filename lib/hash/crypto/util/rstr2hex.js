
define([
	'../options'
], function (O) {
	
return function (input) {
	var t = input,
		l = t.length,
		h = O.hexcase ? "0123456789ABCDEF" : "0123456789abcdef",
		o = "",
		x,
		i = 0;
	for(; i < l; i++) {
		x = t.charCodeAt(i);
		o+= h.charAt((x >>> 4) & 0x0F) + h.charAt(x & 0x0F);
	}
	return o;
};

});
