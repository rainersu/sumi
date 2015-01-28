
define([
	'../var/global',
	'../var/undefined',
	'../var/hasOwnProperty',
	'../misc/classof'
], function (G, U, H, C) {

if (G.JSON) return G.JSON;

var cx   = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    esc  = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    ins,
    meta = {},
    rep;
	
meta['\b'] =  '\\b';
meta['\t'] =  '\\t';
meta['\n'] =  '\\n';
meta['\f'] =  '\\f';
meta['\r'] =  '\\r';
meta['"' ] =  '\\"';
meta['\\'] = '\\\\';
	
function utf (a) {
	return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
}

function str (k, h) {
    var i,
        k,
        v,
        l,
        m = gap,
        p,
		v = h[k],
		t;
    if (v && v.toJSON) {
        v = v.toJSON(k);
    }
    if (C(rep) === 'function') {
        v = rep.call(h, k, v);
    }
    switch (t = C(v)) {
	    case 'string':
	        return quote(v);
	    case 'number':
	    case 'boolean':
	    case 'null':
		case 'undefined':
			return isFinite(v) ? String(v) : 'null';
		default:
        gap+= ins;
        p = [];
        if (t === 'array') {
        	l = v.length;
			for(i = 0; i < l; i++) {
				p[i] = str(i, v) || 'null';
			}
			v = !p.length ? '[]' : gap ? '[\n' + gap + p.join(',\n' + gap) + '\n' + m + ']' : '[' + p.join(',') + ']';
			gap = m;
			return v;
		}
        if (rep && C(rep) === 'array') {
			l = rep.length;
			for (i = 0; i < l; i++) {
				k = rep[i];
				if (C(k) === 'string') {
					v = str(k, v);
					if (v) {
						p.push(quote(k) + (gap ? ': ' : ':') + v);
					}
				}
			}
        }
		else for(k in v) {
			if (H(v, k)) {
				v = str(k, v);
				if (v) {
					p.push(quote(k) + (gap ? ': ' : ':') + v);
				}
			}
        }
		v = !p.length ? '{}' : gap ? '{\n' + gap + p.join(',\n' + gap) + '\n' + m + '}' : '{' + p.join(',') + '}';
		gap = m;
		return v;
	}
}

function quote (s) {
	esc.lastIndex = 0;
	return esc.test(s) ? '"' + s.replace(esc, function (a) {
		var c = meta[a];
		return C(c) == 'string' ? c : utf(a);
	}) + '"' : '"' + s + '"';
}

String.prototype.toJSON  =
Number.prototype.toJSON  =
Boolean.prototype.toJSON = function () {
	return this.valueOf();
};
		
return G.JSON = {
	stringify : function (v, r, s) {
		var i = 0,
			t = C(s);
		gap = '';
		ins = '';
		if (t === 'string') {
			ins = s;
		}
		else if (t === 'number') for (; i < s; i++) {
			ins+= ' ';
		}
		rep = r;
		t = C(r);
		if (t !== 'function' && t !== 'array') {
			throw new Error('JSON.stringify');
		}
		return str('', {'': v});
	},
	parse : function (txt, rev) {
		var j,
			x = String(txt);
		function walk(h, e) {
			var k,
				v, 
				p = h[e];
			if (p && typeof p === 'object') for (k in p) {
				if (H(p, k)) {
					v = walk(p, k);
					if (v !== U) p[k] = v;
					else delete p[k];
				}
			}
			return rev.call(h, e, p);
		}
		cx.lastIndex = 0;
		if (cx.test(x)) {
			x = x.replace(cx, utf);
		}
		if (/^[\],:{}\s]*$/.test(x.replace(
			/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(
			/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(
			/(?:^|:|,)(?:\s*\[)+/g, ''))
		) {
			j = (0, eval)('(' + x + ')');
			return typeof rev === 'function' ? walk({'': j}, '') : j;
		}
		throw new SyntaxError('JSON.parse');
	}
};

});

/**
* @external JSON
* @see {@link http://www.json.org/}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/cc836458(v=vs.94).aspx}
* @see {@link https://github.com/douglascrockford/JSON-js}
*/

/**
* ECMAScript 5.1 Standard <br>
* 将一个 JSON 字符串转换为一个 JavaScript 值。
* @access public
* @func external:JSON.parse
* @param {string} text - JSON 字符串
* @param {function} [reviver] - 用于选择性的篡改某些解析出的属性值
* @returns {*}
* @example
* console.log(JSON.parse('{}'));                // {}
* console.log(JSON.parse('true'));              // true
* console.log(JSON.parse('"foo"'));             // "foo"
* console.log(JSON.parse('[1, 5, "false"]'));   // [1, 5, "false"]
* console.log(JSON.parse('null'));              // null
* console.log(JSON.parse('{"1": 1, "2": 2}'));  // Object {1: 1, 2: 2}
*/
	
/**
* ECMAScript 5.1 Standard <br>
* 将一个 JavaScript 对象字符串化为 JSON 字符串。
* @see {@link external:Date#toJSON}
* @see {@link external:Number#toJSON}
* @see {@link external:Boolean#toJSON}
* @see {@link external:String#toJSON}
* @access public
* @func external:JSON.stringify
* @param {object} value - 将要转为JSON字符串的javascript对象
* @param {(function|number[]|string[])} [replacer] - 用于过滤筛选的函数或白名单数组
* @param {(string|number)} [space] - 插入用于增强可读性的指定空白字符串或指定数目的空格
* @returns {string}
* @example
* console.log(JSON.stringify({
*     l: '"\b\t\n\f\r"\\',
*     o: '',
*     p: null,
*     q: undefined,
*     r: Math,
*     s: .33,
*     t: /\d+/,
*     x: 1,
*     y: new Date(1972, 3, 8),
*     z: [2, 3],
*     u: {},
*     v: [],
*     w: function() {}
* }));  
* // {"l":"\"\b\t\n\f\r\"\\","o":"","p":null,"r":{},"s":0.33,"t":{},"x":1,"y":"1972-04-07T16:00:00.000Z","z":[2,3],"u":{},"v":[]}
*/

/**
* 将字符串转换为 JSON 文本。
* @see {@link external:Date#toJSON}
* @see {@link external:Number#toJSON}
* @see {@link external:Boolean#toJSON}
* @see {@link external:JSON#stringify}
* @access public
* @func external:String.prototype.toJSON
* @returns {string} JSON 文本 
*/
/**
* 将布尔值转换为 JSON 文本。
* @see {@link external:Date#toJSON}
* @see {@link external:Number#toJSON}
* @see {@link external:String#toJSON}
* @see {@link external:JSON#stringify}
* @access public
* @func external:Boolean.prototype.toJSON
* @returns {string} JSON 文本 
*/
/**
* 将数字值转换为 JSON 文本。
* @see {@link external:Date#toJSON}
* @see {@link external:String#toJSON}
* @see {@link external:Boolean#toJSON}
* @see {@link external:JSON#stringify}
* @access public
* @func external:Number.prototype.toJSON
* @returns {string} JSON 文本 
*/
	