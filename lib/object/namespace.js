
define([
	'../misc/ns'
], function (ns) {

return Object.namespace = ns;

});

/**
* 根据指定的路径获取对命名空间的引用。路径中不存在的命名空间将被自动创建。
* @see {@link ns}
* @access public
* @func external:Object.namespace
* @param {string} ns - 符合 a.b.c 格式的命名空间完整路径
* @returns {object} 对路径最末端的命名空间的引用
* @example
* Object.namespace('window.a.z');
* Object.namespace('global.b.z');
* Object.namespace('c.z');
* Object.namespace('v');
* console.log(a);     // { z: {} }
* console.log(b);     // { z: {} }
* console.log(c);     // { z: {} }
* console.log(v);     // {}
*/
