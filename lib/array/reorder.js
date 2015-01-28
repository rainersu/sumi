
define(function () {

function f(a, b) {
	var c = typeof a,
		d = typeof b;
	return a === b ? 0 : c === d ? (a < b ? -1 : 1) : (c < d ? -1 : 1); 
}

var a = {
		'object'  : 1,
		'function': 1
	};
	
return Array.prototype.reorder = function() {
	var u = arguments,
		l = u.length;
	return this.sort(l ? (function() {	
		return function(o, p) {	
			var m,
				i = 0,
				r;
			if(o && p && typeof o in a && typeof p in a) while (i < l && !r) {
				m = u[i++];
				r = f(o[m], p[m]);	
			}				
			return r;
		};
	})() : f);
};

});

/**
* 对数组中的元素进行重排序。
* @see {@link external:Array#shuffle}
* @see {@link external:Array#rnd}
* @access public
* @func external:Array.prototype.reorder
* @param {...string} [propName] - 对于对象类型元素，指定其被用于排序比较的字段名
* @returns {array} 重排序后的原数组 
* @example
* console.log([8, 3, -1, 'a', 0, '5.5'].sort());     // [ -1, 0, 3, '5.5', 8, 'a' ]
* console.log([8, 3, -1, 'a', 0, '5.5'].reorder());  // [ -1, 0, 3, 8, '5.5', 'a' ]
* 
* var a = [{x: 1}, {x: 0}];
* a.reorder('x');
* console.log(a);  // [ { x: 0 }, { x: 1 } ]
* 
* console.log([[1, 2, 3], ['a', 'b']].reorder('length'));  // [ [ 'a', 'b' ], [ 1, 2, 3 ] ]
* 
* console.log([
* 	{x: 2, y: 2, z: 2},
* 	{x: 3, y: 2, z: 3},
* 	{x: 3, y: 1, z: 2},
* ].reorder('y','z'));  // [ { x: 3, y: 1, z: 2 }, { x: 2, y: 2, z: 2 }, { x: 3, y: 2, z: 3 } ]
*/
