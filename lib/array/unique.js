
define(
[
	'../var/slice',
	'../core/json'
]
,function (
	slice,
	JSON
) 
{'use strict';

return function (a) {
	a = slice.call(Object(a));
	var l = a.length;
	if (l < 2) return a;
	var s = JSON.stringify,
		o = {},
		r = [],
		i = 0,
		m,
		n;
	for(; i < l; i++) if (i in a) {
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
* 使用 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify|stringify} 方法，去除 JSON 值重复的元素，返回结果为新数组。
* @see {@link Sumi.Array.uniq}
* @see {@link Sumi.Array.dedup}
* @see {@link Sumi.Array.clean}
* @see {@link external:Array#filter}
* @see {@link external:JSON.stringify}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify}
* @access public
* @func Sumi.Array.unique
* @param {object} arr - 数组、字符串或类数组对象
* @returns {array} 
* @example
* console.log(Sumi.Array.unique([ 1, 2, 2, 3, 1 ]));    // [ 1, 2, 3 ]
* console.log(Sumi.Array.unique( '123321' ));           // [ '1', '2', '3' ]
* 
* console.log(Sumi.Array.unique([ { x: 1 }, { x: 2 }, { x: 2 }, { x: 3 }, { x: 1 } ]));   
* // [ { x: 1 }, { x: 2 }, { x: 3 } ]
* 
* console.log(Sumi.Array.unique([ 1, '1', [ 1 ], { x: 1 }, { x: 1 }, '1', 1 ]));   
* // [ 1, '1', [ 1 ], { x: 1 } ]
* 
* console.log(Sumi.Array.unique([ null, undefined, 0, NaN, 'null' ]));     
* // [ null, undefined, 0, 'null' ]
*/
