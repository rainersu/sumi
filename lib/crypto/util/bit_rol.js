
define(function () {
	
return function (n, c) {
	return (n << c) | (n >>> (32 - c));
};

});
