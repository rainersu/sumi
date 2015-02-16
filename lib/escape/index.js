
define(
[
	'./utf8',
	'./base64',
	'./charCode',
	'./html',
	'./hanzi',
	'./regexp',
	'./indent',
	'./lineFeed',
	'./notation',
	'./escapeLatin1',
	'./stripCombiningMarks'
]
, function (
	utf8,
	base64,
	charCode,
	html,
	hanzi,
	regexp,
	indent,
	lineFeed,
	notation,
	escapeLatin1,
	stripCombiningMarks
) 
{'use strict';

return {
	decodeUTF8          : utf8.decode,
	encodeUTF8          : utf8.encode,
	decodeBase64        : base64.decode,
	encodeBase64        : base64.encode,
	decodeBase64URI     : base64.decodeURI,
	encodeBase64URI     : base64.encodeURI,
	decodeRegExp        : regexp.decode,
	encodeRegExp        : regexp.encode,
	decodeHTML          : html.decode,
	encodeHTML          : html.encode,
	strToHex            : charCode.strToHex,
	hexToStr            : charCode.hexToStr,
	toCSSProp           : notation.kebabCase,
	toHTMAttr           : notation.camelCase,
	toJSConst           : notation.snakeCase,
	toSimpHanzi         : hanzi.simp,
	toTradHanzi         : hanzi.trad,
	insertIndents       : indent.insert,
	removeIndents       : indent.remove,
	insertLineFeeds     : lineFeed.insert,
	removeLineFeeds     : lineFeed.remove,
	escapeLatin1        : escapeLatin1,
	stripCombiningMarks : stripCombiningMarks
};

});

/**
* @namespace Sumi.Escape
*/
