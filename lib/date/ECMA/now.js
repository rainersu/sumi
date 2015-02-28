
define(function () {'use strict';

return Date.now = Date.now || function() {
    return new Date().getTime();
};

});

/**
* ECMAScript 5.1 Standard <br>
* 获取 UTC 1970－1-1T00:00:00 与当前时间之间的毫秒数。
* @see {@link external:Date.parse}
* @access public
* @func external:Date.now
* @returns {number} 
* @example
* console.log(Date.now());
* console.log(Date.now() === new Date().getTime());    // true
*/
