
define(
[
	'./type'
]
, function (
	type
) 
{'use strict';

function p (a, b) {
	var c = typeof a,
		d = typeof b;
	return a === b || (a !== a && b !== b) ? 0 : c === d ? a > b : c > d;
}

function f (o, s) {
	s = s && s.split('.');
	var l = s && s.length,
		i = 0;
	if (l) { 
		for(; i < l; i++) {
			o = o[s[i]];
		}
		return  o;
	}
} 

return function (a, b, k) {
	if (type(k) === 'function') return k(a, b);
	var  l = k && k.length,
		 i = 0,
		 r,
		 n;
	if (!k) return p(a, b);
	while (!r && i < l) {
		n = k[i++];
		r = p(f(a, n), f(b, n));
	}
	return r;
};

});
