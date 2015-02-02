
define([
	'../var/global',
	'../var/slice'
], function (G, S) {

var c = G.console;

return function () {
    if (c) c.log(S(arguments));
};

});
