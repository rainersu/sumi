
define({
	name   : 'CN_TELEPHONE',
	pattern: '(?:\\+86[- ](\\d{2,3})|\\(\\+?86\\)[- ]?(\\d{2,3})|\\(\\+?86[- ](\\d{2,3})\\)|\\(0(\\d{2,3})\\)|0(\\d{2,3}))[- ]?(\\d{3,4}[- ]?\\d{4})',
	keys   : 'zone,zone,zone,zone,zone,number',
	parser : function (o) {'use strict';
		o.number = o.number.replace(/[-\s]+/g, '');
		o.zone = +o.zone;
		return o;
	}
});

/**
* 处理中国大陆地区固话号码的正则表达式模板。
* @var {Sumi.Match} Sumi.Pattern.CN_TELEPHONE
* @example
* var match = Sumi.Pattern.CN_TELEPHONE;
* 
* console.log(match.parse('TEL: (+86)21 5568-3122, (86-21) 55683122'));
* // [ {
* //     number: '55683122', 
* //     zone: '21', 
* //     match: '(+86)21 5568-3122'
* // },{	
* //     number: '55683122', 
* //     zone: '21', 
* //     match: '(86-21) 55683122' 
* // } ]
* 
* console.log(match.is('+86 21 55683122'));     // true
* console.log(match.is('(+86)21 5568-3122'));   // true
* console.log(match.is('(86-21) 55683122'));    // true
* console.log(match.is('(021)55683122'));       // true
* console.log(match.is('021 55683122'));        // true
* 
* console.log(match.is('(+98)21 5568-3122'));   // false
* console.log(match.is('021 556831'));          // false
*/
