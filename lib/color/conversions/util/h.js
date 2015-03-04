
define (function () {'use strict';

return function (h) {
	return (h > 6 || h < -6 ? h %= 6 : h) < 0 ? h + 6 : h;
};

});
