
define(function () {'use strict';

return [
	'CN_ID',
	'(\\d{2})(\\d{2})(\\d{2})(\\d{4})(\\d{2})(\\d{2})(\\d{2}(\\d{1}))([\\dX]{1})',
	'province,city,district,year,month,day,serial,sex,code'
];

});

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
