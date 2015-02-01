
(function (root, lib) {

if( typeof define === 'function' && define.amd) define([], lib);
else if (typeof exports === 'object') module.exports = lib();
else root.R = lib();

}(this, function () { 'use strict';

var _ = [
		{
		/**
		* Matches: +86 21 55683122 | (+86)21 5568-3122 | (86-21) 55683122 | (021)55683122 | 021 55683122
		* Non-Matches: (+98)21 5568-3122 | 021 556831
		*/
			id : 'tel-cn',
			pattern: '(?:\\+86[- ](\\d{2,3})|\\(\\+?86\\)[- ]?(\\d{2,3})|\\(\\+?86[- ](\\d{2,3})\\)|\\(0(\\d{2,3})\\)|0(\\d{2,3}))[- ]?(\\d{3,4}[- ]?\\d{4})',
			keys: 'zone,zone,zone,zone,zone,number'
		},
		{
		/**
		* Matches: +86 18912351181 | (86) 189 1235 1181 | (+86)189-1235-1181 | 18912351181 | 189 1235 1181 | 189-1235-1181
		* Non-Matches:  28912351181 | 1891235118
		*/
			id : 'mobile-cn',
			pattern: '(?:\\+86[- ]|\\(\\+?86\\)[- ]?)?(1\\d{2})[- ]?(\\d{4})[- ]?(\\d{4})',
			keys: 'carrier,zone,serial'
		},
		{
		/**
		* Matches: 44011119800315281X | 440111198003152813
		* Non-Matches: 44011119800315281Z
		*/
			id: 'id-cn',
			pattern: '(\\d{2})(\\d{2})(\\d{2})(\\d{4})(\\d{2})(\\d{2})(\\d{2}(\\d{1}))([\\dX]{1})',
			keys: 'province,city,district,year,month,day,serial,sex,code'
		},	
		{
		/**
		* Matches: 9:00 | 09:00:03 | 9:00am | 9am | 9:00 A.M. | 9A.M.
		* Non-Matches: 9
		*/
			id : 'time',
			pattern: '(\\d{1,2})(\\s*[apAP]\\.?[mM]\\.?)|(\\d{1,2}(?::\\d{1,2}){1,2})(\\s*[apAP]\\.?[mM]\\.?)?',
			keys: 'time,frame,time,frame'
		},	
		{
		/**
		* Matches: a@b.com | a@b.com.cn | a@b.cn | a-b@b.cn
		* Non-Matches: a@b | a@b.c 
		*/
			id : 'email',
			pattern: '([-0-9a-zA-Z.+_]+)@([-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4})',
			keys: 'user,domain'
		},
		{
			id: 'url',
			pattern: '(?:([A-Za-z]+):)?(\\/{0,3})([0-9.\\-A-Za-z]+)(?::(\\d+))?(?:\\/([^?#]*))?(?:\\?([^#]*))?(?:#(.*))?',
			keys: 'scheme,slash,host,port,path,query,hash'
		},
		{
			id: 'number',
			pattern: '([+\\-]?\\d*)(?:\\.(\\d*))?(?:[eE]([+\\-]?\\d+))?',
			keys: 'int,decimal,exponential'
		}
	],
	$ = function(src) {
		var o = src,
			t = {}.toString.call(o),
			p;
		if( t === '[object String]') {
			return $[o];
		}
		if( t === '[object Object]') {
			p = o.pattern;
			return $[o.id || p] = new R(p, o.keys);
		}
	},
	R = function(pattern, keys) {
		var k = keys;
		this.pattern = pattern;
		if(k) {
			if({}.toString.call(k) === '[object Function]') this.parser = k;
			else this.keys = ['result'].concat(k && typeof k === 'object' ? Object(k) : ('' + k).split(/[,;\s]+/));
		}
		return this;
	},
	P = R.prototype,
	idx = 0,
	len = _.length;

for(; idx < len; idx++) $(_[idx]);

P.build = function(flags, mode) {
	var i = flags || '',
		p = this.pattern,
		m = mode || 0;
	i = '/' + p + '/' + i;
	p = m > 0 ? '^(?:' + p + ')$' : m < 0 ? '(?:^|\\b)(?:' + p + ')(?:$|\\b)' : p;
	return this.re = R[i] = (R[i] || new RegExp(p, flags));
};
	
P.is = function(str, func) {
	var r = this.build('', 1).test(str);
	if (r && func) r = func(str); 
	return r;
};

P.in = function(str) {
	return this.build().test(str);
};

P.index = function(str) {
	return ('' + str).search(this.build());
};

P.parse = function(str, global, func) {
	var t = this,
		u =undefined,
		e = t.build('g', -1),
		k = t.keys || [],
		f = t.parser || func,
		l = k.length,
		r = [],
		m,
		a,
		o,
		i,
		v;
	while ((a = e.exec(str)) !== null) {
		if(f) {
			o = f(a);
			if(o != u) r.push(o);
		}
		else  {
			r.push(o = {});
			for (i = 0; i < l; i++) {
				v = a[i];
				m = k[i] || i;
				if(o[m] === u && v !== u) o[m] = a[i];
			}
		}
	}
	return (global ? r.length && r : r[0]) || null;	
};

P.match = function(str) {
	return ('' + str).match(this.build('g', -1));
};

P.replace = function(str, func, flags, mode) {
	return ('' + str).replace(this.build(flags, mode), func);
};

/*
var re = $('url');

console.log(re.parse('http://www.a.com.cn'));
console.log(re.parse('http://www.a.com/b?a=1'));
console.log(re.parse('file:///flash/1.swf'));
console.log(re.parse('//index.html'));
console.log(re.parse('/index.html'));
console.log(re.parse('index'));
*/

$.RegEx = R;
$.fn    = P;
return    $;

}));
