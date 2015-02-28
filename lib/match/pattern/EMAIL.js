
define({
	name   : 'EMAIL',
	pattern: '([-0-9a-zA-Z.+_]+)@([-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4})',
	keys   : 'user,domain'
});

/**
* 处理 {@link http://en.wikipedia.org/wiki/Email_address 邮件地址} 的正则表达式模板。
* @see {@link Sumi.Pattern.URL}
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
