
define(
[
	'./ECMA/index',
	'./GOLDEN_RATIO',
	'./rnd',
	'./uuid',
	'./clip',
	'./ceil10',
	'./floor10',
	'./round10',
	'./factorial',
	'./fibonacci',
	'./iadd',
	'./average',
	'./memoize'	
]
, function (
	ecma,
	GOLDEN_RATIO,
	rnd,
	uuid,
	clip,
	ceil10,
	floor10,
	round10,
	factorial,
	fibonacci,
	iadd,
	average,
	memoize
) 
{'use strict';

return {
	GOLDEN_RATIO : GOLDEN_RATIO,
	rnd          : rnd,
	uuid         : uuid,
	clip         : clip,
	ceil10       : ceil10,
	floor10      : floor10,
	round10      : round10,
	factorial    : factorial,
	fibonacci    : fibonacci,
	iadd         : iadd,
	average      : average,
	memoize      : memoize
};

});

/**
* @namespace Sumi.Math
* @see {@link external:Math}
*/