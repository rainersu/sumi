
define(
[
	'./log',
	'./zip',
	'./unzip',
	'./num',
	'./int',
	'./arr',
	'./func',
	'./type',
	'./cp',
	'./eq',
	'./ns',
	'./klass',
	'./clone',
	'./mixin',
	'./stringify',
	'./memoize'
]
, function (
	log,
	zip,
	unzip,
	num,
	int,
	arr,
	func,
	type,
	cp,
	eq,
	ns,
	klass,
	clone,
	mixin,
	stringify,
	memoize
) 
{'use strict';

return {
	log       : log,
	zip       : zip,
	unzip     : unzip,
	num       : num,
	int       : int,
	arr       : arr,
	func      : func,
	type      : type,
	cp        : cp,
	eq        : eq,
	ns        : ns,
	klass     : klass,
	clone     : clone,
	mixin     : mixin,
	stringify : stringify,
	memoize   : memoize
};

});
