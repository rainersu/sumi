
define(function () {'use strict';

return [
	'URL',
	'(?:([A-Za-z]+):)?(\\/{0,3})([0-9.\\-A-Za-z]+)(?::(\\d+))?(?:\\/([^?#]*))?(?:\\?([^#]*))?(?:#(.*))?',
	'scheme,slash,host,port,path,query,hash'
];

});

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
