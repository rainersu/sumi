
define([
	'../misc/eq'
], function (Q) {

return Object.isEqual = Q;

});

/**
* 对两个变量进行深度递归值比较，判断它们是否一切相等。
* @see {@link eq}
* @access public
* @func external:Object.isEqual
* @param {*} vala - 任意变量
* @param {*} valb - 任意变量
* @returns {boolean}
* @example
* console.log(Object.isEqual(null, undefined));
* // false
* 
* console.log(Object.isEqual('abc', new String('abc')));
* // true
* 
* var x = 'abc';
* var y = new String('abc');
* x.z = 1;
* y.z = 1;
* console.log(Object.isEqual(x, y));
* // false
* 
* console.log(Object.isEqual(+0, -0));              
* // true
* 
* console.log(Object.isEqual(NaN, NaN));            
* // true
* 
* console.log(Object.isEqual(1 / 0, 2 / 0));        
* // true
* 
* console.log(Object.isEqual(/^.*$/ig, new RegExp('^.*$', 'ig')));
* // true
* 
* console.log(Object.isEqual(new Date(1970,2,1), new Date('Sun Mar 01 1970 00:00:00 GMT+0800 (CST)')));
* // true
* 
* console.log(Object.isEqual({
*     a: '1',
* 	  c: [1, 2, 3],
* 	  b: new Date(1970,2,1),
*     d: /^.*$/ig
* }, {
*     a: '1',
*     c: [1, 2, 3],
*     b: new Date('Sun Mar 01 1970 00:00:00 GMT+0800 (CST)'),
*     d: new RegExp('^.*$', 'ig')
* })); 
* // true
*/
