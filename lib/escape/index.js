
define(
[
	'./nce',
	'./latin1',
	'./regexp',
	'./chinese',
	'./notation',
	'./base64'
]
, function (
	nce,
	latin1,
	regexp,
	chinese,
	notation,
	base64
) 
{


return {
	decodeBase64 : base64.decode,
	encodeBase64 : base64.encode,
	decodeRegExp : regexp.decode,
	encodeRegExp : regexp.encode,
	decodeNCE    : nce.decode,
	encodeNCE    : nce.encode,
	toSimpHan    : chinese.simplified,
	toTradHan    : chinese.traditional,
	toCSSProp    : notation.kebabCase,
	toHTMAttr    : notation.camelCase,
	escapeLatin1 : latin1
};

});

/**
* @namespace Sumi.Escape
*/
