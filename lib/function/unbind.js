
define(
[
	'../var/slice'
]
, function (
	slice
) 
{'use strict';
	
return function () {
	var a = slice.call(arguments),
		t = this;
	return function() {
		return t.call.apply(t, slice.call(arguments).concat(a));
	};
};

});

/**
* 使用当前函数体创建一个新函数，将原函数的上下文对象变量 this 解绑为新函数的第一个参数。
* @see {@link external:Function#bind}
* @access public
* @func external:Function.prototype.unbind
* @param {...*} [arg] - 需要被柯里化（Currying）封装给新函数的一个或多个参数
* @returns {function} 创建出的新函数
* @example
* var split1 = ''.split.unbind();
* console.log(split1(0.25, '.'));      // ['0', '25']
* 
* var split2 = ''.split.unbind('.');
* console.log(split2(0.25));           // ['0', '25']
*/
