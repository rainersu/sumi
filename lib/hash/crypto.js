
define(
[
	'../core/cp',
	'./crypto/sha1',
	'./crypto/sha256',
	'./crypto/sha512',
	'./crypto/md5',
	'./crypto/rmd160',
	'./crypto/options'
]
, function (
	cp,
	sha1,
	sha256,
	sha512,
	md5,
	rmd160,
	Crypto
) 
{

return cp(Crypto, {
	sha1   : sha1,
	sha256 : sha256,
	sha512 : sha512,
	md5    : md5,
	rmd160 : rmd160
});
	
});

/**
* @namespace Sumi.Crypto
* @see {@link http://pajhome.org.uk/crypt/md5}
* @see {@link http://github.com/Gozala/crypto}
*/
