
define(
[
	'./ECMA/index',
	'./GOLDEN_RATIO',
	'./rnd',
	'./uid',
	'./clip',
	'./ceil10',
	'./floor10',
	'./round10',
	'./factorial',
	'./fibonacci',
	'./iadd',
	'./average'	
]
, function (
	ecma,
	GOLDEN_RATIO,
	rnd,
	uid,
	clip,
	ceil10,
	floor10,
	round10,
	factorial,
	fibonacci,
	iadd,
	average
) 
{

return {
	GOLDEN_RATIO : GOLDEN_RATIO,
	rnd          : rnd,
	uid          : uid,
	clip         : clip,
	ceil10       : ceil10,
	floor10      : floor10,
	round10      : round10,
	factorial    : factorial,
	fibonacci    : fibonacci,
	iadd         : iadd,
	average      : average
};

});

/**
* @namespace Sumi.Math
* @see {@link external:Math}
*/