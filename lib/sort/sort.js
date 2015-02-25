
define(
[
	'../core/type',
	'../core/prop',
	'../core/compare',
	'../var/slice',
	'./algorithm/bubble'
]
, function (
	type,
	prop,
	compare,
	slice,
	bubble
) 
{'use strict';

function sort (s, o, k, c) {
	o = slice.call(Object(o));
	c = c || compare;
	var l = k && k.length;
	return s(o,  o.length, l ? (function () {
		return function (a, b) {
			var m,
				i = 0,
				r;
			while (i < l && !r) {
				m = k[i++];
				r = type(m) === 'function' ? c(m(a), m(b)) : c(prop(a, m), prop(b, m));
			}
			return r;
		};
	})() :  c);
}

var xxx = [ {a: 3}, {a: 2}, {a: 1}, {a: 2} ];

console.log(sort(bubble.func, xxx, ['a']));
console.log(sort(bubble.func, xxx, [function(o) { return 0 - o.a; }]));

/*

function (a, b, k) {
	if (!k) return +p(a, b);
	if (type(k) === 'function') return +k(a, b);
	var  l = k.length,
		 i = 0,
		 r,
		 n;
	while (!r && i < l) {
		n = k[i++];
		r = p(prop(a, n), prop(b, n));
	}
	return +r;
};

var Sort = {},
	a = arguments,
	l = a.length,
	i;

while(l--) {
	i = a[l];
	(function (n, f) {
		Sort[n] = function (c, p) {
			c = slice.call(Object(c));
			return  f(c, c.length, p || compare);
		} 
	})(i.name, i.func);
}

function compare (a, b, k) {
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
}
	
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

return Sort;
*/

});
