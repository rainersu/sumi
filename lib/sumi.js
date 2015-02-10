
var requirejs = require('requirejs');

requirejs.config({
	nodeRequire: require
});

requirejs(
[
	'./core/json',
	'./core/class',
	'./core/memcache',
	'./core/index',
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
	JSON,
	Class,
	Memcache,
	Core,
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

var Sumi = 
{
	JSON     : JSON,
	Class    : Class,
	Memcache : Memcache,
	Core     : Core,
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
};




return Sumi;

});

/**
* @namespace Sumi
*/
