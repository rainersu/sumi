
define(
[
	'./html',
	'./regexp',
	'./base64',
	'./hanzi',
	'./notation',
	'./escapeLatin1',
	'./stripCombiningMarks'
]
, function (
	html,
	regexp,
	base64,
	hanzi,
	notation,
	escapeLatin1,
	stripCombiningMarks
) 
{


return {
	decodeBase64        : base64.decode,
	encodeBase64        : base64.encode,
	decodeBase64URI     : base64.decodeURI,
	encodeBase64URI     : base64.encodeURI,
	decodeRegExp        : regexp.decode,
	encodeRegExp        : regexp.encode,
	decodeHTML          : html.decode,
	encodeHTML          : html.encode,
	toCSSProp           : notation.kebabCase,
	toHTMAttr           : notation.camelCase,
	toSimpHanzi         : hanzi.simp,
	toTradHanzi         : hanzi.trad,
	escapeLatin1        : escapeLatin1,
	stripCombiningMarks : stripCombiningMarks
};

});

/**
* @namespace Sumi.Escape
*/
