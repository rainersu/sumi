
define(function () {'use strict';

return function (x, y) {
	x = Object(x);
	var o = {},
		i = x.length >>> 0;
	for(y = y === undefined ? 0 : Object(y); i--;) {
		o[x[i]] = y ? y[i] : 1; 
	}
	return o;
};
	
});

/**
* 基于分别指定的键数组和值数组合并创建对象。
* @see {@link Sumi.unzip}
* @access public
* @func Sumi.zip
* @param {array} arr1 - 键数组
* @param {array} [arr2] - 值数组。如果没有提供，则所有键都会默认被赋值为 1 
* @returns {object}
* @example
* console.log(Sumi.zip(['x', 'y', 'z']));
* // { x: 1, y: 1, z: 1 }
* 
* console.log(Sumi.zip(['x', 'y', 'z'], [1, 2, 3]));
* // { x: 1, y: 2, z: 3 }
*/
