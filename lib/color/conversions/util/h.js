
define (function () {'use strict';

return function (h) {
	h%= 6;
	return h < 0 ? h + 6 : h;
};

});
