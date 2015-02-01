
define(function () {

var i,
	f = /_/.test(function(){_}) ? /\b_super\b/ : /./,
	m = 'function';

function x (n, p, c) {
	return function () {
		var t = this,
			s = t._super,
			r;
		t._super = c;
		r = p.apply(t, arguments);        
		t._super = s;
		return r;
	};
}

function e (s) {
	i = 1;
	var n = this,
		k = n.prototype,
		P = new n();
	i = 0;	
	function C () {
		var t  = this;
		if(!i && this.init) {
			this.init.apply(this, arguments);
		}
	}
	function z (o, b) {
		var n,
			p,
			c,
			d = b ? P : C;
		for (n in o) {
			p = o[n],
			c = k[n];
			d[n] = b && typeof p == m && typeof c == m && f.test(p) ? x(n, p, c) : p;
		}
		return C;
	}
	z(s, 1);
	C.prototype = P;
	C.prototype.constructor = C;
	C.extend = e;
	C.expand = z;
	return C;
}

function C () {}
C.extend = e;
return C;

});

/**
* @class Class
* @see {@link klass}
* @see {@link http://ejohn.org/blog/simple-javascript-inheritance/}
* @see {@link http://www.crockford.com/javascript/inheritance.html}
*/

/**
* 创建一个类。
* @see {@link Class#extend}
* @see {@link Class#expand}
* @access public
* @func Class.extend
* @param {object} props - 添加给类的实例字段。如有必要，至少包含一个名为 init 的初始化构造函数
* @param {function} props.init - 构造函数
* @returns {class}
* @example
* var Flower = Class.extend({
*     init : function (color) {
*         this.color = color;
*     },
*     dead : function () {
*         this.color = 'black';
*     }
* });
* 
* var rose = new Flower('red');
* console.log(rose.color);      // red
* 
* rose.dead();
* console.log(rose.color);      // black
*/
	
/**
* 基于当前类创建一个子类。
* @see {@link Class.extend}
* @see {@link Class#expand}
* @access public
* @func Class.prototype.extend
* @param {object} props - 添加给类的实例字段。如有必要，至少包含一个名为 init 的初始化构造函数
* @param {function} props.init - 构造函数
* @returns {class}
* @example
* var Person = Class.extend({
*     init: function (isDancing) {
*         this.dancing = isDancing;
*     }
* });
* 
* var Ninja = Person.extend({
*     init: function () {
*         this._super(false);
*     }
* });
* 
* var p = new Person(true);
* console.log(p.dancing);     // true
* 
* var n = new Ninja(true);
* console.log(n.dancing);     // false
*/

/**
* 为类添加实例方法或静态方法。
* @see {@link Class.extend}
* @see {@link Class#extend}
* @access public
* @func Class.prototype.expand
* @param {object} props - 要添加的字段集合
* @param {boolean} [instance=false]
* @param {boolean} instance.true  - 添加实例方法
* @param {boolean} instance.false - 添加静态方法
* @returns {class}
* @example
* var X = Class.extend({
*     n: 1
* }).expand({
*     n: 2 
* });
* var x = new X();
* var Y = X.extend();
* var y = new Y();
* 
* console.log(X.n);      // 2
* console.log(x.n);      // 1
* console.log(Y.n);      // undefined
* console.log(y.n);      // 1
*/
