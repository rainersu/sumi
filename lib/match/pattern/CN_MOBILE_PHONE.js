
define({
	name   : 'CN_MOBILE_PHONE',
	pattern: '(?:\\+86[- ]|\\(\\+?86\\)[- ]?)?(1\\d{2})[- ]?(\\d{4})[- ]?(\\d{4})',
	keys   : 'carrier,zone,serial'
});

/**
* 处理中国大陆地区手机号码的正则表达式模板。
* @see {@link Sumi.Pattern.CN_TELEPHONE}
* @var {Sumi.Match} Sumi.Pattern.CN_MOBILE_PHONE
* @example
* var match = Sumi.Pattern.CN_MOBILE_PHONE;
* 
* console.log(match.parse('MOBILE: (+86)189-1235-1181, 189-1235-1181'));
* // [ { 
* //     serial: '1181',
* //     zone: '1235',
* //     carrier: '189',
* //     match: '(+86)189-1235-1181' 
* // },{ 
* //     serial: '1181',
* //     zone: '1235',
* //     carrier: '189',
* //     match: '189-1235-1181' 
* // } ]
* 
* console.log(match.is('+86 18912351181'));      // true
* console.log(match.is('(86) 189 1235 1181'));   // true
* console.log(match.is('(+86)189-1235-1181'));   // true
* console.log(match.is('18912351181'));          // true
* console.log(match.is('189 1235 1181'));        // true
* console.log(match.is('189-1235-1181'));        // true
* 
* console.log(match.is('28912351181'));          // false
* console.log(match.is('1891235118'));           // false
*/
