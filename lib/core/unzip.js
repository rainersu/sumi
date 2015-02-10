
define(function () {'use strict';
	
function f(a, s, i, l) {
	var o = a.split(s.charAt(i++));
	if (i < l) {
		for (var n = 0, h = o.length; n < h; n++) {
			o[n] = f(o[n], s, i, l);
		}
	}
	return o; 
}

return function (s, x, y) {
	x = x || (y ? ',=' : ',');
	x+= '';
	var b = x.length,
		a = f('' + s, x, 0, b),
		o = a,
		m,
		c,
		l,
		i;
	if (y) {
		for(o = {}, b = b > 1, l = a.length, i = 0; i < l; i++) {
			m = a[i];
			if (b) {
				o[m[0]] = m[1];
			}
			else {
				o[m] = 1;
			}
		}
	}
	return o;
};
	
});

/**
* 从一个字符串以指定规则创建出一维或多维数组，或对象。
* @see {@link Sumi.Core.zip}
* @access public
* @func Sumi.Core.unzip
* @param {string} str - 源字符串
* @param {string} [separatorList=',='] - 依次用于切割的单字符分隔符列表
* @param {boolean} [toObject=false] - 如果为 true ，则创建出对象。否则将创建出一维或多维数组
* @returns {array|object}
* @example
* console.log(Sumi.Core.unzip('a=b,c=d'));               // [ 'a=b', 'c=d' ]
* console.log(Sumi.Core.unzip('a=b,c=d', ',='));         // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
* console.log(Sumi.Core.unzip('a=b,c=d', ',' , true));   // { 'a=b': 1, 'c=d': 1 }
* console.log(Sumi.Core.unzip('a=b,c=d', ',=', true));   // { a: 'b', c: 'd' }
*/
