
define(
[
	'./log',
	'./zip',
	'./unzip',
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
{

return {
	log       : log,
	zip       : zip,
	unzip     : unzip,
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
