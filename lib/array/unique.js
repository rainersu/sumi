
define(function () {

return Array.prototype.unique = function() {
	var a = Object(this),
		o = {},
		r = [],
		l = a.length >>> 0,
		i = 0,
		s = JSON.stringify,
		m,
		n;
	for(; i < l; i++) {
		m = a[i];
		n = s(m);
		if(!o[n]) {
			o[n] = 1;
			r.push(m);
		}
	}
	return r;
};

});

/**
* 返回一个去除了数组中的重复元素的新数组。
* @see {@link external:Array#map}
* @see {@link external:Array#filter}
* @access public
* @func external:Array.prototype.unique
* @returns {array} 新数组 
* @example
* console.log([1, 2, 2, 3, 1].unique());                       // [ 1, 2, 3 ]
* console.log([{x:1}, {x:2}, {x:2}, {x:3}, {x:1}].unique());   // [ { x: 1 }, { x: 2 }, { x: 3 } ]
* console.log([1, '1', [1], {x:1}, {x:1}, '1', 1].unique());   // [ 1, '1', [ 1 ], { x: 1 } ]
* console.log([null, undefined, 0, NaN, 'null'].unique());     // [ null, undefined, 0, 'null' ]
*/
