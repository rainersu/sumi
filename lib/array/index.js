
define(
[
	'./ECMA/index',
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
	'./jumble',
	'./clone',
	'./reorder',
	'./union',
	'./difference',
	'./intersect'
]
, function (
	ecma,
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
	jumble,
	clone,
	reorder,
	union,
	difference,
	intersect
) 
{'use strict';

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
	jumble    : jumble,
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
