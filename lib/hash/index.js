
define(
[
	'./uuid1',
	'./uuid4',
	'./uuid3',
	'./uuid5',
	'./md5',
	'./rmd160',
	'./sha1',
	'./sha256',
	'./sha512'
]
, function (
	uuid1,
	uuid4,
	uuid3,
	uuid5,
	md5,
	rmd160,
	sha1,
	sha256,
	sha512
) 
{


return {
	uuid1  : uuid1,
	uuid4  : uuid4,
	uuid3  : uuid3,
	uuid5  : uuid5,
	md5    : md5,
	rmd160 : rmd160, 
	sha1   : sha1,
	sha256 : sha256,
	sha512 : sha512
};

});

/**
* @namespace Sumi.Hash
*/
