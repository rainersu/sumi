
define(function () {'use strict';
	
return function (n, c) {
	return (n << c) | (n >>> (32 - c));
};

});
