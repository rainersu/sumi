
define(
[
	'./nce',
	'./latin1',
	'./regexp',
	'./chinese',
	'./notation'
]
, function (
	nce,
	latin1,
	regexp,
	chinese,
	notation
) 
{


return {
	decodeNCE    : nce.decode,
	encodeNCE    : nce.encode,
	escapeLatin1 : latin1,
	decodeRegExp : regexp.decode,
	encodeRegExp : regexp.encode,
	toSimpHan    : chinese.simplified,
	toTradHan    : chinese.traditional,
	toCSSProp    : notation.kebabCase,
	toHTMAttr    : notation.camelCase
};

});

/**
* @namespace Sumi.Escape
*/
