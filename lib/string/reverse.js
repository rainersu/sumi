
define(
[
	'../core/type'
]
, function (
	type
) 
{'use strict';
	
return function (t, p) {
	var b = type(p = p || '') === 'regexp';
	return ('' + t).split(p).reverse().join(b ? RegExp.lastMatch : p);
};

});

/**
* 反转字符串。
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse}
* @access public
* @func Sumi.String.reverse
* @param {string | regExp} [separator=''] - 用于最小切分单位的可选分隔符
* @returns {string}
* @example
* console.log(Sumi.String.reverse('12345'));                    // 54321
* console.log(Sumi.String.reverse('习近平'));                    // 平近习
* console.log(Sumi.String.reverse('John Wong', /\s/));          // Wong John
* console.log(Sumi.String.reverse('border-left-width', '-'));   // width-left-border
*/
