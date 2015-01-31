
define([
	'../var/undefined',
	'../var/hasOwnProperty',
	'./classof'
], function (U, H, C) {

return function(obj, func, order, that) {
	var o = Object(obj),
		t = C(o) === 'string',
		l = o.length >>> 0,
		d = order >> 0,
		m = 0,
		n = l,
		x = 1,
		i,
		r;
	if (d && l && !o.call) {
		if (d < 0) {
			m = l - 1,
			n =-1,
			x =-1;
		}
		while (m - n) {
			r = func.call(that, t ? o.charAt(m) : o[m], m, o);
			if (r !== U) return r;
			m+= x;
		}
	}
	else {
		for (m in o) if (H(o, m)) {
			i = o[m];
			if (t && i === U && !isNaN(parseInt(m))) i = o.charAt(m) || U; // <ie8 不支持 string[index] 语法 
			r = func.call(that, i, m, o);
			if (r !== U) return r;
		}
	}
	return o;
};

});

/**
* 遍历指定对象，对其每个自有可枚举属性执行回调函数。
* @see {@link external:Array#forEach}
* @see {@link external:Array#some}
* @see {@link external:Array#every}
* @access public
* @func each
* @param {*} obj - 要遍历的对象、数组、或字符串
* @param {execCallback} func - 回调函数。如果有返回值，则强制中止遍历并直接返回该值
* @param {integer|boolean} [order=0] - 如果 obj 是数组、字符串或其它类数组对象，则此参数用于控制遍历顺序：大于 0 使用顺序，小于 0 使用逆序。等于 0 则一概使用 for in 循环  
* @param {object} [that] - 强制指定回调函数内上下文对象 this
* @returns {undefined|*} 
* @example
* var o = { a: 1, b: 2, c: 3 };
* console.log(each(o, function (i, n) {
*     o[n] = ++i;
* }));
* // { a: 2, b: 3, c: 4 }
* 
* var o = [ 1, 2, 3 ];
* console.log(each(o, function (i, n) {
*     o[n] = ++i;
* }));
* // [ 2, 3, 4 ]
* 
* var src = '123', dst = '';
* each(src, function (i, n) {
*     dst+= +i + 1;
* });
* console.log(dst);   // 234
*/

/**
* @callback execCallback
* @param {*} item - 当前被遍历到的元素
* @param {number} index - 当前被遍历到的元素序号
* @param {array | object} obj - 当前在被遍历的数组、字符串、类数组对象或可迭代对象
* @returns {undefined|*}
*/
