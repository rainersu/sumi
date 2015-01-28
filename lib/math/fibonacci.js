
define(function () {
	
return Math.fibonacci = function(int) {  
    for(var f0 = 0, f1 = 1, f2, i = 0, n = int >>> 0; i < n; ++i) {  
        f2 = f1 + f0;  
        f0 = f1;
		f1 = f2;  
    }  
    return f0;  
};

});

/**
* 计算斐波那契数列值。
* @access public
* @func external:Math.fibonacci
* @param {number} int - 获取数列的第几项
* @returns {number}
* @example
* console.log(Math.fibonacci(0));                      //  0
* console.log(Math.fibonacci(1));                      //  1
* console.log(Math.fibonacci(2));                      //  1
* console.log(Math.fibonacci(5));                      //  5
* console.log(Math.fibonacci(7));                      // 13
*/
