
define([
	'../var/slice'
], function (S) {
	
return Math.average = function() {
	var a = S(arguments);
	return (0, eval)(a.join('+')) / a.length;
};

});

/**
* 计算平均数。
* @access public
* @func external:Math.average
* @param {...number} nums - 数字
* @returns {number}
* @example
* console.log(Math.average(1,2,3));                    // 2
*/
