
define(function () {'use strict';
	
return function(n) {  
    var a = 0, 
		b = 1, 
		c, 
		i = 0;
	for(n = n >>> 0; i < n; ++i) {  
        c = b + a;  
        a = b;
		b = c;  
    }  
    return  a;  
};

});

/**
* 计算斐波那契数列值。
* @see {@link Sumi.Math.factorial}
* @access public
* @func Sumi.Math.fibonacci
* @param {number} int - 获取数列的第几项
* @returns {number}
* @example
* console.log(Sumi.Math.fibonacci(0));    //  0
* console.log(Sumi.Math.fibonacci(1));    //  1
* console.log(Sumi.Math.fibonacci(2));    //  1
* console.log(Sumi.Math.fibonacci(5));    //  5
* console.log(Sumi.Math.fibonacci(7));    // 13
*/
