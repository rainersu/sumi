
define(
[
	'../../var/global'
]
, function (
	global
) 
{'use strict';

function f () {
	var b = new Array(16),
		t = global.crypto || global.msCrypto;
	if (t = t && t.getRandomValues) {
		if (global.Uint8Array) {
			b = new Uint8Array(16);
			return function () {
		        t(b);
		        return b;
			};
		}
	}
	else try {
		t = requirejs('crypto').randomBytes;
		return function () {
			return t(16);
		};
	}
	catch (e) {}
	return function () {
		for (var i = 0, r; i < 16; i++) {
			if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
			b[i] = r >>> ((i & 0x03) << 3) & 0xff;
		}
		return b;
	};
}
	
return f();

});
