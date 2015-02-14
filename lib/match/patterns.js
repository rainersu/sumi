
define(function () {'use strict';

return {
	EMAIL : 
	[
		'([-0-9a-zA-Z.+_]+)@([-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4})',
		'user,domain'
/**
* 处理 {@link http://en.wikipedia.org/wiki/Email_address 邮件地址} 的正则表达式模板。
* @var {Sumi.Match} Sumi.Pattern.EMAIL
* @example
* var match = Sumi.Pattern.EMAIL;
* 
* console.log(match.parse('admin@me.com'));
* // [ { domain: 'me.com', user: 'admin', match: 'admin@me.com' } ]
* 
* console.log(match.match('他俩的邮件地址是candy@me.com和frank@live.com'));
* // [ 'candy@me.com', 'frank@live.com' ]
*/
	],
	URL :
	[
		'(?:([A-Za-z]+):)?(\\/{0,3})([0-9.\\-A-Za-z]+)(?::(\\d+))?(?:\\/([^?#]*))?(?:\\?([^#]*))?(?:#(.*))?',
		'scheme,slash,host,port,path,query,hash'
/**
* 处理 {@link http://en.wikipedia.org/wiki/Uniform_resource_locator URL} 的正则表达式模板。
* @var {Sumi.Match} Sumi.Pattern.URL
* @example
* var match = Sumi.Pattern.URL;
* 
* console.log(match.parse('smtp://www.me.com/user?id=3'));
* // [ { 
* //     query: 'id=3',
* //     path: 'user',
* //     host: 'www.me.com',
* //     slash: '//',
* //     scheme: 'smtp',
* //     match: 'smtp://www.me.com/user?id=3' 
* // } ]
* 
* console.log(match.is('www.apple.com'));        // true
* console.log(match.is('file:///index.html'));   // true
* console.log(match.is('www.mac.com\\index'));   // false
*/
	],
	TIME :
	[
		'(\\d{1,2})(\\s*[apAP]\\.?[mM]\\.?)|(\\d{1,2}(?::\\d{1,2}){1,2})(\\s*[apAP]\\.?[mM]\\.?)?',
		'time,frame,time,frame',
		function (o) {
			var x = o.frame,
				z = x && /P/i.test(x) ? 12 : 0,
			a = o.time.split(/\W+/);
			return {
				minute : +a[1] || 0,
				second : +a[2] || 0,
				hour   : z + (+a[0])
			};
		}
/**
* 处理时间格式的正则表达式模板。
* @var {Sumi.Match} Sumi.Pattern.TIME
* @example
* var match = Sumi.Pattern.TIME;
* 
* console.log(match.parse('9:15 A.M. or 10pm or 13:30:55'));
* // [  
* //     { hour:  9, minute: 15, second:  0 },
* //     { hour: 22, minute:  0, second:  0 },
* //     { hour: 13, minute: 30, second: 55 }
* // ]
* 
* console.log(match.parse('9:15 A.M. or 10pm', true, function (o) {
*     if (o.frame) o.frame = /P/i.test(o.frame) ? '下午' : '上午';
*     return o;
* }));
* // [  
* //     { frame: '上午', time: '9:15', match: '9:15 A.M' },
* //     { frame: '下午', time: '10', match: '10pm' }
* // ]
* 
* console.log(match.is('9:00'));        // true
* console.log(match.is('09:00:03'));    // true
* console.log(match.is('9:00am'));      // true
* console.log(match.is('9am'));         // true
* console.log(match.is('9A.M.'));       // true
* console.log(match.is('9:00 A.M.'));   // true
* 
* console.log(match.is('9'));           // false
* console.log(match.is('9mm'));         // false
* console.log(match.is('9:512'));       // false
*/
	],
	CN_ID :
	[
		'(\\d{2})(\\d{2})(\\d{2})(\\d{4})(\\d{2})(\\d{2})(\\d{2}(\\d{1}))([\\dX]{1})',
		'province,city,district,year,month,day,serial,sex,code'
/**
* 处理中国大陆身份证号码的正则表达式模板。
* @var {Sumi.Match} Sumi.Pattern.CN_ID
* @example
* var match = Sumi.Pattern.CN_ID;
* 
* console.log(match.parse('44011119800315281X'));
* // [ { 
* //     code: 'X',
* //     sex: '1',
* //     serial: '281',
* //     day: '15',
* //     month: '03',
* //     year: '1980',
* //     district: '11',
* //     city: '01',
* //     province: '44',
* //     match: '44011119800315281X' 
* // } ]
* 
* console.log(match.parse('440111198003152813', true, function (o) {
*     return {
*         sex: +o.sex % 2 ? 'male' : 'female',
*         birthday: new Date(+o.year, +o.month - 1, +o.day).toLocaleDateString()
*     }
* })); 
* // [ {
* //     sex: 'male', 
* //     birthday: 'Saturday, March 15, 1980'
* // } ]
* 
* console.log(match.is('44011119800315281Z'));   // false
*/
	],
	CN_MOBILE_PHONE : 
	[
		'(?:\\+86[- ]|\\(\\+?86\\)[- ]?)?(1\\d{2})[- ]?(\\d{4})[- ]?(\\d{4})',
		'carrier,zone,serial'
/**
* 处理中国大陆地区手机号码的正则表达式模板。
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
	],
	CN_TELEPHONE : 
	[
		'(?:\\+86[- ](\\d{2,3})|\\(\\+?86\\)[- ]?(\\d{2,3})|\\(\\+?86[- ](\\d{2,3})\\)|\\(0(\\d{2,3})\\)|0(\\d{2,3}))[- ]?(\\d{3,4}[- ]?\\d{4})',
		'zone,zone,zone,zone,zone,number',
		function (o) {
			o.number = o.number.replace(/[-\s]+/g, '');
			o.zone = +o.zone;
			return o;
		}
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
	]	
};

});

//	id: 'number',
//	pattern: '([+\\-]?\\d*)(?:\\.(\\d*))?(?:[eE]([+\\-]?\\d+))?',
//	keys: 'int,decimal,exponential'