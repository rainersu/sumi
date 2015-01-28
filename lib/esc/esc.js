
define([
	'../misc/cp',
	'./nce',
	'./latin1',
	'./regexp',
	'./chinese'
], function (
	cp,
	nce,
	latin1,
	regexp,
	chinese
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
	toDBC        : chinese.toDBC
});

var str = '，。　：？';
console.log(esc.toDBC(str));

return esc;
	
});

/**
* @namespace esc
*/
