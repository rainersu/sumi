
define(function () {'use strict';

return function () {
	return this.valueOf();
};

});

/**
* 返回基于布尔类型值转换出的 JSON 文本。
* @see {@link external:Date#toJSON}
* @see {@link external:Number#toJSON}
* @see {@link external:String#toJSON}
* @see {@link external:JSON.stringify}
* @access public
* @func external:Boolean.prototype.toJSON
* @returns {string} JSON 文本 
* @example
* console.log(true.toJSON());             // true
* console.log(new Boolean().toJSON());    // false
*/
