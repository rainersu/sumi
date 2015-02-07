
define(function () {'use strict';

return function () {
	return this.valueOf();
};

});

/**
* 返回基于数字类型值转换出的 JSON 文本。
* @see {@link external:Date#toJSON}
* @see {@link external:Boolean#toJSON}
* @see {@link external:String#toJSON}
* @see {@link external:JSON.stringify}
* @access public
* @func external:Number.prototype.toJSON
* @returns {string} JSON 文本 
* @example
* console.log(0x88.toJSON());             // 136
* console.log(new Number().toJSON());     // 0
* console.log(NaN.toJSON());              // NaN
* console.log(Infinity.toJSON());         // Infinity
* console.log((.300).toJSON());           // 0.3
*/
