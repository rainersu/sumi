
define(
[
	'../../var/fromCC',
	'../../array/dim',
	'./ns'
]
, function (
	fromCC,
	dim,
	ns
) 
{'use strict';

function a (s, n, e, b, x) {
	for (var i = n; i <= e; i += 2) b[x++] = parseInt(s.substr(i, 2), 16);
}

function m (n, c) {
	var b = n.toString(16);
	if (b.length < 2) b = "0" + b;
	if (c) b = b.toUpperCase();
	return b;
}

function h (b, n, e, c, s, x) {
	for (var i = n; i <= e; i++) s[x++] = m(b[i], c);
	return s;
}
	
function p (u, s) {
    s = ns[s] || s;
    a(s,  0,  7, u,  0);
    a(s,  9, 12, u,  4);
    a(s, 14, 17, u,  6);
    a(s, 19, 22, u,  8);
    a(s, 24, 35, u, 10);
    return u;
}

function f (u) {
	var s = new Array(32);
	h(u,  0,  3, false, s,  0);
	s[ 8] = "-";
	h(u,  4,  5, false, s,  9);
	s[13] = "-";
	h(u,  6,  7, false, s, 14);
	s[18] = "-";
	h(u,  8,  9, false, s, 19);
	s[23] = "-";
	h(u, 10, 15, false, s, 24);
	return s.join("");
}

return function (n, d, z, r) {
	var i,
		u = dim(16, 0x00),
		t = '',
		v = p(u, n),
		s;
	for (i = 0; i < 16; i++) {
		t+= fromCC(v[i]);
	}
	t+= d;
	s = z(t, undefined, 2);
	for (i = 0; i < 16; i++) {
		u[i] = s.charCodeAt(i);
	}
	u[6] &= 0x0F;
	u[6] |= (r << 4); 
	u[8] &= 0x3F;
	u[8] |= (0x02 << 6);
	return f(u);
};

});
