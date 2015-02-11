
define(function () {'use strict';

function r (s) {
	return (s = '' + s).replace(/[\r\n]/g, '');
}

return {
	insert: function (s, w) {
		return r(s = '' + s).replace(new RegExp('.{' + (w || s.length) + '}', 'g'), '$&\r\n');
	},
	remove: r
};

});

/**
* 给字符串中插入换行和回车。
* @see {@link Sumi.Escape.removeLineFeeds}
* @access public
* @func Sumi.Escape.insertLineFeeds
* @param {string} str - 字符串
* @param {number} charNum - 每行字符数
* @returns {string}
* @example
* var x = Sumi.Escape.insertLineFeeds('123456789', 3);
* console.log(x);
* 
* // 123
* // 456
* // 789
*/

/**
* 移除字符串中的换行和回车。
* @see {@link Sumi.Escape.insertLineFeeds}
* @access public
* @func Sumi.Escape.removeLineFeeds
* @param {string} - 字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.removeLineFeeds('123\r\n456\r\n789'));
* // 123456789
*/
