
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
* 使用当前函数体创建一个新函数，将原函数的上下文对象变量 this 解绑为由新函数的第一个参数手工指定。
* @see {@link external:Function#bind}
* @see {@link external:Function#unhost}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply}
* @access public
* @func external:Function.prototype.unbind
* @param {...*} [arg] - 需要被柯里化（{@link http://en.wikipedia.org/wiki/Currying Currying}）封装给新函数的一个或多个参数
* @returns {function} 创建出的新函数
* @example
* var split1 = String.prototype.split.unbind(   );
* console.log( split1(0.25, '.') );
* // ['0', '25']
* 
* var split2 = String.prototype.split.unbind('.');
* console.log( split2(0.25) );           
* // ['0', '25']
*/
