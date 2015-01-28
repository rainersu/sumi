	
define([
	'./toISOString'
], function (I) {

return Date.prototype.toJSON = Date.prototype.toJSON || function() {
	return I.call(this);
};

});

/**
* ECMAScript 5.1 Standard <br>
* 返回基于日期对象转换出的 JSON 文本。
* @see {@link external:Date#toISOString}
* @access public
* @func external:Date.prototype.toJSON
* @returns {string} JSON 文本 
* @example
* console.log((new Date('05 October 2011 14:48 UTC')).toJSON());       // 2011-10-05T14:48:00.000Z
* console.log((new Date('05 October 2011 14:48 UTC')).toISOString());  // 2011-10-05T14:48:00.000Z
* console.log((new Date('2011-10-05T14:48:00.000Z')).toISOString());   // 2011-10-05T14:48:00.000Z
*/
