
define(function () {

return Array.prototype.clone = function () {
	return this.slice();
};

});

/**
* 复制一个包含相同元素（值或引用）的数组。
* @access public
* @func external:Array.prototype.clone
* @returns {array}
* @example
* console.log([1, 2].clone());     // [ 1, 2 ]
*/
