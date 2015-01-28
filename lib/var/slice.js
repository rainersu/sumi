
define([
	'../function/bind'
], function () {
	
return Function.prototype.call.bind(Array.prototype.slice);

});
