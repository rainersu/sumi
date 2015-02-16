
define(function ()  {'use strict';

var r = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;

return function (s) {
	return ('' + s).replace(r, '$1');
};

});

/**
* 移除 Unicode 字符串中的组合用附加符号 ({@link http://en.wikipedia.org/wiki/Combining_character Unicode combining marks}) 。
* @see {@link Sumi.Escape.escapeLatin1}
* @access public
* @func Sumi.Escape.stripCombiningMarks
* @param {string} str - 要处理的字符串
* @returns {string}
* @example
* console.log(Sumi.Escape.stripCombiningMarks('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞'));      // ZALGǪ!
*/