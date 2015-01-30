
define(function () {

return function (r) {
	return r.substr( 0, 8) + '-' +
	       r.substr( 8, 4) + '-' +
	       (((parseInt(r.substr(12, 4), 16) & 0x0fff) | 0x3000)).toString(16) + '-' +
	       (((parseInt(r.substr(16, 4), 16) & 0x3fff) | 0x8000)).toString(16) + '-' +
	       r.substr(20, 12);
};

});
