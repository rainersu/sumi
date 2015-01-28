
define(function () {

return Function.prototype.bind = Function.prototype.bind || function(that) {
	var s = Array.prototype.slice,
		a = s.call(arguments, 1),
		t = this,
		F = function() {},
		f = function() {
			return t.apply(this instanceof F && that ? this : that, a.concat(s.call(arguments)));
		};
	F.prototype = t.prototype;
	f.prototype = new F();
	return f;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 使用当前函数体创建一个置换了上下文对象变量 this 的新函数，同时还可以对原函数的部分或全部参数做柯里化（Currying）封装。
* @see {@link external:Function#unbind}
* @access public
* @func external:Function.prototype.bind
* @param {object} that - 新函数使用的 this
* @param {...*} [arg] - 需要被柯里化（Currying）封装的一个或多个参数
* @returns {function} 创建出的新函数
* @example
* var slice = [].slice.bind('123');
* console.log(slice(2));             // ['3']
*/
