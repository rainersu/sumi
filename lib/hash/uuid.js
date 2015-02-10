
define(
[
	'../core/cp',
	'./uuid/index',
	'./uuid/v3',
	'./uuid/v5'
]
, function (
	cp,
	UUID, 
	v3, 
	v5
) 
{

return cp(UUID, {
	v3 : v3,
	v5 : v5
});

});
	
/**
* @namespace Sumi.UUID
* @see {@link Sumi.Math.uuid}
* @see {@link http://github.com/broofa/node-UUID}
* @see {@link https://github.com/LiosK/UUID.js}
* @see {@link http://nodejs.org/docs/v0.6.2/api/crypto.html}
*/
