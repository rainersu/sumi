	
define(function () {

return Date.parse = Date.parse || function(dateStr) {
    return new Date(dateStr).getTime();
};

});

/**
* ECMAScript 5.1 Standard <br>
* 将日期字符串转换成与 UTC 1/1/1970 - 00:00:00 之间的毫秒数。
* @see {@link external:Date.now}
* @access public
* @func external:Date.parse
* @param {string} dateStr - 日期字符串
* @returns {number} 
* @example
* console.log(Date.parse('2011-20-20'));               // NaN
* console.log(Date.parse('2011-10-10'));               // 1318204800000
* console.log(Date.parse('2011-10-10T14:48:00'));      // 1318258080000
*/