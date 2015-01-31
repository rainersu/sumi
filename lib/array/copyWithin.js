
define(function () {

return Array.prototype.copyWithin = Array.prototype.copyWithin || function (target, start, end) {
	var a = Object(this),
		l = a.length >>> 0,
		r = target >> 0,
		t = r < 0 ? Math.max(l + r, 0) : Math.min(r, l),
		s = start >> 0,
		f = s < 0 ? Math.max(l + s, 0) : Math.min(s, l),
		e = arguments.length < 3 ? l : end >> 0,
		n = e < 0 ? Math.max(l + e, 0) : Math.min(e, l),
		c = Math.min(n - f, l - t),
		d = 1;
	if (f < t && t < (f + c)) {
		d = -1;
		f += c - 1;
		t += c - 1;
	}
	while (c > 0) {
		if (f in a) a[t] = a[f];
		else delete a[t];
		f += d;
		t += d;
		c--;
	}
	return a;
};

});

/**
* ECMAScript 6 Draft <br>
* 在数组内部复制一系列元素覆盖指定位置的原有元素。
* @see {@link external:Array#fill}
* @access public
* @func external:Array.prototype.copyWithin
* @param {number} target - 开始覆盖的目标位置
* @param {number} start - 拷贝的起始位置
* @param {number} [end = this.length] - 拷贝的结束位置
* @returns {array} 修改后的原数组
* @example
* console.log([1, 2, 3, 4, 5].copyWithin(0, 3));             // [4, 5, 3, 4, 5]
* console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));          // [4, 2, 3, 4, 5]
* console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));        // [4, 2, 3, 4, 5]
* console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));  // {0: 1, 3: 1, length: 5}
*/
