
define(function () {'use strict';
	
return function (o, s) {
	if (o == null) return;
	s = s && s.split('.');
	var l = s && s.length;
	if (!l) return;
	for(var i = 0; i < l; i++) {
		o = o[s[i]];
		if (o == null) return;
	}
	return  o;
};

});

/**
* 根据为对象指定的属性链路径获取最终属性值。如果属性链中任一环节不存在，则返回 undefined 。
* @see {@link Sumi.ns}
* @access public
* @func Sumi.prop
* @param {object} obj - 根对象
* @param {string} ns - 符合 a.b.c 格式的命名空间完整路径
* @returns {*}
* @example
* console.log(Sumi.prop());   // undefined
* console.log(Sumi.prop(Math, 'xxx.zzz'));   // undefined
* console.log(Sumi.prop(Function, 'prototype.constructor.toString'));   // [Function: toString]
* @example
* var o = { a: { b: { c: [3, 8] } } };
* console.log(Sumi.prop(o, 'a.b.c.0'));        // 3
* console.log(Sumi.prop(o, 'a.b.c.1'));        // 8
* console.log(Sumi.prop(o, 'a.b.c.length'));   // 2
*/
