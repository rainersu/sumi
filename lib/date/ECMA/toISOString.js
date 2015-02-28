
define(function () {'use strict';

function f(n) {
	return n < 10 ? '0' + n : n;
};

return Date.prototype.toISOString = Date.prototype.toISOString || function () {
	var t = this;
	return      t.getUTCFullYear() +
		'-' + f(t.getUTCMonth() + 1) +
		'-' + f(t.getUTCDate()) +
		'T' + f(t.getUTCHours()) +
		':' + f(t.getUTCMinutes()) +
		':' + f(t.getUTCSeconds()) +
		'.' +  (t.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
		'Z';
};

});

/**
* ECMAScript 5.1 Standard <br>
* 以字符串值的形式返回采用 ISO 格式的日期。
* @see {@link external:Date#toJSON}
* @access public
* @func external:Date.prototype.toISOString
* @returns {string} 采用国际标准化组织 (ISO) 格式的日期的字符串表示形式 
* @example
* console.log((new Date('05 October 2011 14:48 UTC')).toISOString());  // 2011-10-05T14:48:00.000Z
*/
