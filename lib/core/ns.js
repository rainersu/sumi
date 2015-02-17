
define(
[
	'../var/global'
], 
function (
	global
) 
{'use strict';

return function (s) {
	var r = global,
		t = s && ('' + s).replace(/^(?:window|global)\.|\s+/, '');
	if (t) {	
		var n = t.split('.'),
			l = n.length,
			i = 0,
			w,
			o;
		for(; i < l; i++) {
			w = n[i];
			r = r[w] = Object(r[w]);
		}
	}
	return r;
};

});

/**
* 根据指定的路径获取对命名空间的引用。路径中不存在的命名空间将被自动创建。
* @see {@link Sumi.prop}
* @access public
* @func Sumi.ns
* @param {string} ns - 符合 a.b.c 格式的命名空间完整路径
* @returns {object} 对最终命名空间的引用。如果发生错误则返回全局对象 global(window)
* @example
* Sumi.ns('window.a.z');
* console.log(global.a);          // { z: {} }
* 
* Sumi.ns('global.b.z');
* console.log(global.b);          // { z: {} }
* 
* Sumi.ns('c.z');
* console.log(global.c);          // { z: {} }
* 
* Sumi.ns('v');
* console.log(global.v);          // {}
* @example
* var A = Sumi.ns();
* console.log(A === global);      // true
* 
* var A = Sumi.ns('Array');
* console.log(A === Array);       // true
*/
