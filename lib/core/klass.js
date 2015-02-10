
define(
[
	'./class'
]
, function (
	Class
) 
{'use strict';

return function (p, i, s) {
	var b =  typeof p === 'function' && p.prototype instanceof Class;
	return Class.extend.call(b ? p : Class, b ? i : p).expand(b ? s : i);
};
	
});

/**
* 新建一个类，并为其批量添加静态字段和实例字段。
* @see {@link Sumi.Class}
* @see {@link external:Object.create}
* @see {@link http://ejohn.org/blog/simple-javascript-inheritance/}
* @see {@link http://www.crockford.com/javascript/inheritance.html}
* @access public
* @func Sumi.Core.klass
* @param {class} [parentClass={@link Sumi.Class}] - 父类
* @param {object} [instanceMembers] - 实例字段字典
* @param {object} [staticMembers] - 静态字段字典
* @returns {class}
* @example
* var A = Sumi.Core.klass({ i: 1 });
* var B = Sumi.Core.klass({ i: 2 }, { i: 3 });
* var C = Sumi.Core.klass(A, { i: 4 });
* var D = Sumi.Core.klass(B, { i: 5 }, { i: 6 });
* var a=new A();
* var b=new B();
* var c=new C();
* var d=new D();
* console.log(A.i);    // undefined
* console.log(a.i);    // 1
* console.log(B.i);    // 3
* console.log(b.i);    // 2
* console.log(C.i);    // undefined
* console.log(c.i);    // 4
* console.log(D.i);    // 6
* console.log(d.i);    // 5
* @example 
* var X = Sumi.Core.klass({
*     init : function (a, b) {
*         this.c = a + b;
*     }
* });
* var Y = Sumi.Core.klass(X, {
*     init : function (b) {
*         this._super(30, b);
*     }
* });
* y = new Y(3);
* 
* console.log(y.c);     // 33
* 
* console.log(y instanceof X);                          // true
* console.log(Y instanceof X);                          // false
* console.log(Y.prototype instanceof X);                // true
* 
* console.log(X.prototype.isPrototypeOf(y));            // true
* console.log(X.prototype.isPrototypeOf(Y));            // false
* console.log(X.prototype.isPrototypeOf(Y.prototype));  // true
*/
