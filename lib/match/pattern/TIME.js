
define({
	name   : 'TIME',
	pattern: '(\\d{1,2})(\\s*[apAP]\\.?[mM]\\.?)|(\\d{1,2}(?::\\d{1,2}){1,2})(\\s*[apAP]\\.?[mM]\\.?)?',
	keys   : 'time,frame,time,frame',
	parser : function (o) {
		var x = o.frame,
			z = x && /P/i.test(x) ? 12 : 0,
		a = o.time.split(/\W+/);
		return {
			minute : +a[1] || 0,
			second : +a[2] || 0,
			hour   : z + (+a[0])
		};
	}
});

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
