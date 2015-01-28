
define(function () {
	
return String.prototype.camelCase = function() {
    return this.replace(/[^\da-zA-Z]+([\da-zA-Z])?/gi, function(s, r) {
        return (r||'').toUpperCase();
    });
};

});

/**
* 将变量名字符串转换为驼峰表示法。
* @access public
* @func external:String.prototype.camelCase
* @param {string} str - 变量名
* @returns {string}
* @example
* console.log('box-sizing'.camelCase());        // boxSizing
* console.log('-moz-box-sizing'.camelCase());   // MozBoxSizing
* console.log('$math'.camelCase());             // Math
*/
