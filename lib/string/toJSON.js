
define(function () {'use strict';

return function () {
	return this.valueOf();
};

});

/**
* 返回基于字符串类型值转换出的 JSON 文本。
* @see {@link external:Date#toJSON}
* @see {@link external:Number#toJSON}
* @see {@link external:Boolean#toJSON}
* @see {@link external:JSON.stringify}
* @access public
* @func external:String.prototype.toJSON
* @returns {string} JSON 文本 
* @example
* console.log('\\\\r\\\\n'.toJSON());        // \\r\\n
* console.log(new String(NaN).toJSON());     // NaN
* console.log('&nbsp;'.toJSON());            // &nbsp;
* console.log('<html>'.toJSON());            // <html>
* console.log('\u0021'.toJSON());            // !
*/
