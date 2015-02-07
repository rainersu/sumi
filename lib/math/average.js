
define(
[
	'../var/slice'
]
, function (
	slice
) 
{'use strict';
	
return function (a) {
	a = slice.call(arguments);
	return (0, eval)(a.join('+')) / a.length;
};

});

/**
* 计算平均数。
* @access public
* @func Sumi.Math.average
* @param {...number} num - 数字
* @returns {number}
* @example
* console.log(Sumi.Math.average(1, 2, 3));     // 2
*/
