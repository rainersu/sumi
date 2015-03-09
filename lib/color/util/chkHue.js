
define(function () {'use strict';

return function (v, t) {
	v = +v;
	return !t ? v : t > 2 ? ((v%= 360) < 0 ? v + 360 : v) : Math.min(t > 1 ? 100 : 255, Math.max(0, v));	
};

});
