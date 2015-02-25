
define(function () {

return function (c, x, y, p) {
	var a = c[x],
		b = c[y];
	if (p(a , b) > 0) {
		c[x] = b;
		c[y] = a;
		return 1;
	}
};

});
