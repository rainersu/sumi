
(Dict = function ($e) {
	this.elements = $e || {};
}).method({
	has: function($k) {
		return {}.hasOwnProperty.call(this.elements, $k);
	},
	get: function($k) {
		return this.has($k) ? this.elements[$k] : void 0;
	},
	set: function($k, $v) {
		this.elements[$k] = $v;
	},
	del: function($k) {
		delete this.elements[$k];
		return this;
	}
});
