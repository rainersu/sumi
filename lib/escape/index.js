
define(
[
	'./nce',
	'./latin1',
	'./regexp',
	'./hanzi',
	'./notation',
	'./base64'
]
, function (
	nce,
	latin1,
	regexp,
	hanzi,
	notation,
	base64
) 
{


return {
	decodeBase64    : base64.decode,
	encodeBase64    : base64.encode,
	decodeBase64URI : base64.decodeURI,
	encodeBase64URI : base64.encodeURI,
	decodeRegExp    : regexp.decode,
	encodeRegExp    : regexp.encode,
	decodeNCE       : nce.decode,
	encodeNCE       : nce.encode,
	toCSSProp       : notation.kebabCase,
	toHTMAttr       : notation.camelCase,
	toSimpHanzi     : hanzi.simp,
	toTradHanzi     : hanzi.trad,
	escapeLatin1    : latin1
};

});

/**
* @namespace Sumi.Escape
*/
