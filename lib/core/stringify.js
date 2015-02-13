
define(
[
	'./type',
	'../var/hasOP',
	'./json'
]
, function (
	type,
	hasOP
) 
{'use strict';

var j = JSON.stringify;

function f (v) {
	switch (type(v)) {
	case 'string' :
	case 'date'   :
		return '"' + v + '"';
	case 'object' :
	case 'array'  :
		var a = [],
		k;
		for(k in v) if (hasOP.call(v, k)) {
			a.push('"' + k + '"' + ':' + f(v[k]));
		}
		return '{' + a.join(',') + '}';
	}
	return '' + v;
}

return function (v, w) {
	return !w ? '' + v : w > 1 ? f(v) : j(v);

}

});

/** 
* 将参数指定的数据字符串化。
* @see {@link external:JSON.stringify}
* @access public
* @func Sumi.stringify
* @param {*} val - 要字符串化的数据
* @param {number} [opt=0] - 字符串化采用的方式
* @param {number}  opt.0  - 使用 Javascript 的自动类型转换，相当于 String(val)
* @param {number}  opt.1  - 使用 JSON.stringify
* @param {number}  opt.2  - 尽可能保留一切数据，譬如函数和正则表达式
* @returns {string}
* @example
* var x = {
*     a : function (x) { return x; },
*     b : [ new String('$$$'), new RegExp('.', 'i') ],
*     d : /$/g,
*     e : new Date(),
*     f : { g : 8, h : false, i : '###' }
* };
* 
* console.log(Sumi.stringify(x));
* // [object Object]
* 
* console.log(Sumi.stringify(x, 1));
* // {"b":["$$$",{}],"d":{},"e":"2015-02-12T17:00:27.389Z","f":{"g":8,"h":false,"i":"###"}}
* 
* console.log(Sumi.stringify(x, 2));
* // {a:function (x) { return x; },b:{0:"$$$",1:/./i},d:/$/g,e:"Fri Feb 13 2015 01:00:27 GMT+0800 (CST)",f:{g:8,h:false,i:"###"}}
* @example
* var x = [ 0, true, null, /$/i ];
* 
* console.log(Sumi.stringify(x));      // 0,true,,/$/i
* console.log(Sumi.stringify(x, 1));   // [0,true,null,{}]
* console.log(Sumi.stringify(x, 2));   // {0:0,1:true,2:null,3:/$/i}
*/
