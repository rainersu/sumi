
define(
[
	'../var/hasOP'
]
, function (
	hasOP
) 
{'use strict';

return function (o, a) {
	o = Object(o);
	return a && (a in o) && !hasOP.call(o, a); 
};

});

/**
* 判断对象是否拥有某个原型属性。
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable}
* @access public
* @func Sumi.Object.hasProtoProperty
* @param {object} o - 要检测的对象
* @param {string} a - 要检测的原型属性名
* @returns {boolean}
* @example
* function X() { this.a = 1; }
* X.prototype.b = 2;
* var x = new X();
* x.c = 3;
* 
* console.log(Sumi.Object.hasProtoProperty(x, 'a'));   // false
* console.log(Sumi.Object.hasProtoProperty(x, 'b'));   // true
* console.log(Sumi.Object.hasProtoProperty(x, 'c'));   // false
*/
