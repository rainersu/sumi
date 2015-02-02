
define([
	'../misc/cp'
], function (X) {
	
return Function.prototype.method = function(src, ovr, dpc) {
	X(this.prototype, src, ovr, dpc);
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
* @param {boolean} [dpc=false] - 如果为 true ，则执行深复制：将所有字段递归复制至非对象和数组类型
* @returns {object} 对构造函数的引用
* @example
* String.method({
*     x: function() {
*         return this + 'x';
*     }
* });
* console.log('x'.x());   // xx
*/
