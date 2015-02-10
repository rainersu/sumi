
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs(
[	
	'./core/index',
	'./core/json',
	'./core/class',
	'./core/memcache',
	'./error/index',
	'./regexp/index',
	'./date/index',
	'./function/index',
	'./array/index',
	'./object/index',
	'./boolean/index',
	'./string/index',
	'./number/index',
	'./math/index',
	'./escape/index',
	'./hash/uuid'
]
, function (
	Sumi,
	JSON,
	Class,
	Memcache,
	Error,
	RegExp,
	Date,
	Function,
	Array,
	Object,
	Boolean,
	String,
	Number,
	Math,
	Escape,
	UUID
) 
{

Sumi.cp(Sumi, {
	JSON     : JSON,
	Class    : Class,
	Memcache : Memcache,
	Error    : Error,
	RegExp   : RegExp,
	Date     : Date,
	Function : Function,
	Array    : Array,
	Object   : Object,
	Boolean  : Boolean,
	String   : String,
	Number   : Number,
	Math     : Math,
	Escape   : Escape,
	UUID     : UUID
});


console.log(Sumi.Escape.toCSSProp('mozBoxSizing', '_'));

return Sumi;

});

/**
* @namespace Sumi
*/
