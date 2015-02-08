
define([
	'../../misc/cp',
	'./sha1',
	'./sha256',
	'./sha512',
	'./md5',
	'./rmd160',
	'./options'
], function (
	cp,
	sha1,
	sha256,
	sha512,
	md5,
	rmd160,
	crypto
) {

return cp(crypto, {
	sha1   : sha1,
	sha256 : sha256,
	sha512 : sha512,
	md5    : md5,
	rmd160 : rmd160
});
	
});

/**
* @namespace Crypto
* @see {@link http://pajhome.org.uk/crypt/md5}
* @see {@link http://github.com/Gozala/crypto}
*/
