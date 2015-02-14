
define(
[
	'./match',
	'./patterns'
]
, function (
	match,
	patterns
) 
{'use strict';

return match.batch(patterns);

});
