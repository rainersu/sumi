
define([
	'../misc/cp'
], function (X) {
	
return Function.prototype.method = function(src, ovr) {
	X(this.prototype, src, ovr);
	return this;
};

});

/**
* 为构造函数批量添加原型方法。
* @see {@link cp}
* @see {@link external:Object.assign}
* @see {@link external:Object.clone}
* @access public
* @func external:Function.prototype.method
* @param {object} src - 包含一个或多个要添加方法的对象
* @param {boolean} [ovr=false] - 是否强制覆盖已有方法
* @returns {object} 对构造函数的引用
* @example
* String.method({
*     x: function() {
*         return this + 'x';
*     }
* });
* console.log('x'.x());   // xx
*/
