
define(
[
	'../core/cp'
]
, function (
	cp
) 
{'use strict';
	
return function (y, r, c) {
	return cp(this.prototype, y, r, c);
};

});

/**
* 为构造函数批量添加原型方法。
* @see {@link Sumi.cp}
* @see {@link external:Object.assign}
* @access public
* @func external:Function.prototype.method
* @param {object} src - 源对象
* @param {boolean} [override=false] - 是否覆盖同名字段
* @param {boolean} override.true - 覆盖已有同名字段
* @param {boolean} override.false - 跳过已有同名字段
* @param {boolean} [deep=false]
* @param {boolean} deep.true - 深复制：将所有字段递归复制至非对象和数组类型
* @param {boolean} deep.false - 浅复制：对于对象和数组类型字段只传递引用关系
* @returns {object} 对构造函数的引用
* @example
* String.method({
*     x: function() {
*         return this + 'x';
*     }
* });
* console.log('x'.x());   // xx
*/
