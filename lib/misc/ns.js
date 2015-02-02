
define([
	'../var/global'
], function (G) {

return function (ns) {
	var r = G,
		n = ('' + ns).replace(/^(?:window|global)\./, '').split('.'),
		l = n.length,
		i = 0,
		w,
		o;
	for(; i < l; i++) {
		w = n[i];
		o = r[w];
		r = r[w] = o == null ? {} : Object(o);
	}
	return r;
};

});

/**
* 根据指定的路径获取对命名空间的引用。路径中不存在的命名空间将被自动创建。
* @see {@link external:Object.namespace}
* @access public
* @func ns
* @param {string} ns - 符合 a.b.c 格式的命名空间完整路径
* @returns {object}
* @example
* ns('window.a.z');
* ns('global.b.z');
* ns('c.z');
* ns('v');
* console.log(a);     // { z: {} }
* console.log(b);     // { z: {} }
* console.log(c);     // { z: {} }
* console.log(v);     // {}
*/
