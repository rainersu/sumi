
define(
[
	'../../var/slice'
]
, function (
	slice
) 
{'use strict';

return function (that) {
	var a = slice.call(arguments, 1),
		t = this;	
	function F () {}
	function f () {
		return t.apply(this instanceof F && that ? this : that, a.concat(slice.call(arguments)));
	}
	F.prototype = t.prototype;
	f.prototype = new F();
	return f;
};

});

/**
* ECMAScript 5.1 Standard <br>
* 使用当前函数体创建一个置换了上下文对象变量 this 的新函数，同时还可以对原函数的部分或全部参数做柯里化（{@link http://en.wikipedia.org/wiki/Currying Currying}）封装。
* @see {@link external:Function#unbind}
* @see {@link external:Function#unhost}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply}
* @access public
* @func external:Function.prototype.bind
* @param {object} that - 新函数使用的 this
* @param {...*} [arg] - 需要被柯里化（{@link http://en.wikipedia.org/wiki/Currying Currying}）封装的一个或多个参数
* @returns {function}
* @example
* var slice = Array.prototype.slice.bind('123');
* console.log(slice(2));   // ['3']
* 
* 
* function list() { return Array.prototype.slice.call(arguments); }
* 
* console.log(list( 1, 2, 3 ));    // [ 1, 2, 3 ]
* 
* var list1 = list.bind(undefined, 37);
* 
* console.log(list1( ));           // [ 37 ]
* console.log(list1( 1, 2, 3 ));   // [ 37, 1, 2, 3 ]
*/
