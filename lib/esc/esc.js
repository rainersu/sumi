
define([
	'../misc/cp',
	'./nce',
	'./latin1',
	'./regexp',
	'./chinese',
	'./notation'
], function (
	cp,
	nce,
	latin1,
	regexp,
	chinese,
	notation
) {

function esc () {

}

cp(esc, {
	decodeNCE    : nce.decode,
	encodeNCE    : nce.encode,
	decodeRegExp : regexp.decode,
	encodeRegExp : regexp.encode,
	escapeLatin1 : latin1,
	toSimplified : chinese.simplified,
	toTraditional: chinese.traditional,
	toCSSProp    : notation.toCSSProp,
	toHTMAttr    : notation.toHTMAttr
});




console.log(esc.toCSSProp('boxSizing'));        // box-sizing
console.log(esc.toCSSProp('MozBoxSizing'));   	// -moz-box-sizing


return esc;
	
});

/**
* @namespace esc
*/
