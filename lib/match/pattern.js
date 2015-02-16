
define(
[
	'./match',
	'./pattern/EMAIL',
	'./pattern/URL',
	'./pattern/TIME',
	'./pattern/CN_ID',
	'./pattern/CN_MOBILE_PHONE',
	'./pattern/CN_TELEPHONE'
], function (
	Match,
	EMAIL,
	URL,
	TIME,
	CN_ID,
	CN_MOBILE_PHONE,
	CN_TELEPHONE
) 
{'use strict';

var Pattern = {},
	a = arguments,
	l = a.length,
	i;

while (l-- > 1) {
	i = a[l];
	Pattern[i.name] = new Match(i.pattern, i.keys, i.parser);
	
}

return Pattern;

});

/**
* {@link Sumi.Match 正则表达式模板}集合。
* @namespace Sumi.Pattern
* @see {@link Sumi.Match}
* @see {@link Sumi.RegExp}
* @see {@link external:RegExp}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/9dthzd08(v=vs.94).aspx}
*/
