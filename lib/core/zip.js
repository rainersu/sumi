
define([
	'../var/undefined'
], function (U) {

return function (arr1, arr2) {
	var o = {},
		a = Object(arr1),
		b = arr2 === U ? 0 : Object(arr2),
		i = a.length >>> 0;
	for(; i--;) {
		o[a[i]] = b ? b[i] : 1; 
	}
	return o;
};
	
});

/**
* 基于分别指定的键数组和值数组合并创建对象。
* @see {@link unzip}
* @see {@link external:Array.from}
* @see {@link external:Array.fromObj}
* @see {@link external:Array.of}
* @see {@link external:Array.flatten}
* @access public
* @func zip
* @param {array} arr1 - 键数组
* @param {array} [arr2] - 值数组。如果没有提供，则所有键都会默认被赋值为 1 
* @returns {object}
* @example
* console.log(zip(['x', 'y', 'z']));
* // { x: 1, y: 1, z: 1 }
* 
* console.log(zip(['x', 'y', 'z'], [1, 2, 3]));
* // { x: 1, y: 2, z: 3 }
*/
