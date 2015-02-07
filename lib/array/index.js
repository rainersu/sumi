
define(
[
	'./each',
	'./flatten',
	'./concatAll',
	'./fromObj',
	'./dedup',
	'./unique',
	'./uniq',
	'./dim',
	'./matrix',
	'./range',
	'./clean',
	'./rnd',
	'./shuffle',
	'./clone',
	'./reorder',
	'./union',
	'./difference',
	'./intersect',
	'./ECMA/index'
]
, function (
	each,
	flatten,
	concatAll,
	fromObj,
	dedup,
	unique,
	uniq,
	dim,
	matrix,
	range,
	clean,
	rnd,
	shuffle,
	clone,
	reorder,
	union,
	difference,
	intersect
) 
{

return {
	each      : each,
	flatten   : flatten,
	concatAll : concatAll,
	fromObj   : fromObj,
	dedup     : dedup,
	unique    : unique,
	uniq      : uniq,
	dim       : dim,
	matrix    : matrix,
	range     : range,
	clean     : clean,
	rnd       : rnd,
	shuffle   : shuffle,
	clone     : clone,
	reorder   : reorder,
	union     : union,
	difference: difference,
	intersect : intersect
};

});

/**
* @namespace Sumi.Array
* @see {@link external:Array}
*/
