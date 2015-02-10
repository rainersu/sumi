
define(function () {'use strict';

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
	NIL = '00000000-0000-0000-0000-000000000000';
	
return  function (ns) {
	var u = ('' + ns || NIL).replace(/\-|\s/g, ''),
		l = u.length,
		r = '',
		i = 0;
	for(; i < l; i+= 2) {
		r+= String.fromCharCode(parseInt(u[i] + u[i + 1], 16));
	}

  return r;
}

});
