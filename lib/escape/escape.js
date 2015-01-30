
define([
	'./nce',
	'./latin1',
	'./regexp',
	'./chinese',
	'./notation'
], function (
	nce,
	latin1,
	regexp,
	chinese,
	notation
) {


return {
	decodeNCE    : nce.decode,
	encodeNCE    : nce.encode,
	decodeRegExp : regexp.decode,
	encodeRegExp : regexp.encode,
	toCSSProp    : notation.kebabCase,
	toHTMAttr    : notation.camelCase,
	escapeLatin1 : latin1,
	toSimpHan    : chinese.simplified,
	toTradHan    : chinese.traditional
};
	
});

/**
* @namespace esc
*/
