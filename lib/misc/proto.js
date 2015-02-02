
define([
	'../Object/create',
	'../var/hasOwnProperty'
], function (C, H) {

return function (p, o) {
	var r = C(p),
		i,
		t;
	for(i in Object(o)) if (H(o, i)) {
		r[i] = o[i];
	}
	return r;
};
	
});

/**
* 以指定的对象为原型新建一个对象，并为其批量添加字段。
* @see {@link klass}
* @see {@link Class}
* @see {@link external:Object.create}
* @access public
* @func proto
* @param {object} [proto=null] - 要被作为原型的对象
* @param {object} [members] - 浅复制给新建对象用于对其初始化
* @returns {object} 新建的对象
* @example
* var a = {
*     x : 1,
*     z : function () { return this.x; }
* };
* var b = proto(a, {
*     x : 2
* });
* console.log(a.z());           // 1
* console.log(b.z());           // 2
*/
