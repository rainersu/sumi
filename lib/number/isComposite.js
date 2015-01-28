
define([
	'./isInteger'
], function (I) {
	
return Number.isComposite = function(val) {
	var n = 2,
		v = +val,
		q;
	if(I(v) && v > 3) {
		q = Math.sqrt(v);
		while(n <= q) {
			if(v % n++ < 1) return true;
		}
	}
	return false;
};

});
	
/**
* 判断指定变量是否是合数。
* @see {@link external:Number.isPrime}
* @access public
* @func external:Number.isComposite
* @param {number} val - 要检测的数值
* @returns {boolean}
* @example
* console.log(Number.isComposite(0));                      // false
* console.log(Number.isComposite(1));                      // false
* console.log(Number.isComposite(2));                      // false
* console.log(Number.isComposite(3));                      // false
* console.log(Number.isComposite(4));                      // true
* console.log(Number.isComposite(5));                      // false
* console.log(Number.isComposite(6));                      // true
* console.log(Number.isComposite(7));                      // false
* console.log(Number.isComposite(8));                      // true
* console.log(Number.isComposite(9));                      // true
*/
