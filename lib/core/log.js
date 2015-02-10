
define(function () {'use strict';

var b = typeof window !== '' + undefined,
	g = b ? window : global,
	c = g.console,
	f = c ? c.log : b ? g.alert : function(s) { throw s; },
	s = Array.prototype.slice;

return function () {
    f(s.call(arguments));
};

});

/** 
* 根据当前环境尽可能实现 {@link https://developer.mozilla.org/en-US/docs/Web/API/Console.log console.log} 的功能。如果该方法不存在，则尝试用 {@link https://developer.mozilla.org/en-US/docs/Web/API/Window.alert window.alert} 替代。如果也不可用，则尝试用 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw throw} 替代。
* @access public
* @func Sumi.log
* @param {...*} val - 要即时输出的信息
* @example
* Sumi.log('\u0026', 0x26, { m: 1 }, [ 1, 2 ]);  // [ '&', 38, { m: 1 }, [ 1, 2 ] ]
*/
