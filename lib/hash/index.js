
define(
[
	'./uuid1',
	'./uuid4',
	'./uuid3',
	'./md5'
]
, function (
	uuid1,
	uuid4,
	uuid3,
	md5
) 
{


return {
	uuid1 : uuid1,
	uuid4 : uuid4,
	uuid3 : uuid3,
	md5   : md5
};

});

/**
* @namespace Sumi.Hash
*/
