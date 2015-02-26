
define(function () {'use strict';
	
return function (t, e) {
	var l = t.length,
		d = e.length, 
		v = Array(Math.ceil(l / 2)),
		f = Math.ceil(l * 8 / (Math.log(d) / Math.log(2))),
		r = Array(f),		
		i = 0, 
		j = v.length, 
		o = '',
		q, 
		x, 
		u;
	for(; i < j; i++) {
		v[i] = (t.charCodeAt(i * 2) << 8) | t.charCodeAt(i * 2 + 1);
	}
	for(j = 0; j < f; j++) {
		u = [];
		x = 0;
		for(i = 0; i < v.length; i++) {
			x = (x << 16) + v[i];
			q = Math.floor(x / d);
			x-= q * d;
			if(u.length > 0 || q > 0) u[u.length] = q;
		}
		r[j] = x;
		v = u;
	}
	for(i = r.length - 1; i >= 0; i--) {
		o+= e.charAt(r[i]);
	}
	return o;
};

});
