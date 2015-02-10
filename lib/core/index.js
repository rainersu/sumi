
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
	'./class',
	'./klass',
	'./clone',
	'./mixin'
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
	Class,
	klass,
	clone,
	mixin
) 
{

return {
	log   : log,
	zip   : zip,
	unzip : unzip,
	arr   : arr,
	func  : func,
	type  : type,
	cp    : cp,
	eq    : eq,
	ns    : ns,
	Class : Class,
	klass : klass,
	clone : clone,
	mixin : mixin
};

});

/**
* @namespace Sumi.Core
*/
