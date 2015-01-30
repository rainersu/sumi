
define([
	'../var/hasOwnProperty',
	'../var/object'
], function (H, O) {

return Object.hasProtoProperty = function (o, a) {
	o = O(o);
	return a && (a in o) && !H(o, a); 
};

});

/**
* 判断对象是否拥有某个原型属性。
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty}
* @access public
* @func external:Object.hasProtoProperty
* @param {object} o - 要检测的对象
* @param {string} a - 要检测的原型属性名
* @returns {boolean}
* @example
* function X() { this.a = 1; }
* X.prototype.b = 2;
* var x = new X();
* x.c = 3;
* 
* console.log(Object.hasProtoProperty(x, 'a'));   // false
* console.log(Object.hasProtoProperty(x, 'b'));   // true
* console.log(Object.hasProtoProperty(x, 'c'));   // false
*/
