
define(
[
	'./trunc',
	'./imul',
	'./acosh',
	'./asinh',
	'./atanh',
	'./cosh',
	'./sinh',
	'./tanh',
	'./log1p',
	'./log2',
	'./log10',
	'./hypot',
	'./cbrt',
	'./clz32',
	'./expm1',
	'./sign'
]
, function (
	trunc,
	imul,
	acosh,
	asinh,
	atanh,
	cosh,
	sinh,
	tanh,
	log1p,
	log2,
	log10,
	hypot,
	cbrt,
	clz32,
	expm1,
	sign
) 
{'use strict';

Math.trunc = trunc;
Math.imul  = imul;
Math.cosh  = cosh;
Math.acosh = acosh;
Math.sinh  = sinh;
Math.asinh = asinh;
Math.tanh  = tanh;
Math.atanh = atanh;
Math.log2  = log2;
Math.log1p = log1p;
Math.log10 = log10;
Math.hypot = hypot;
Math.cbrt  = cbrt;
Math.clz32 = clz32;
Math.expm1 = expm1;
Math.sign  = sign;

});

/**
* @external Math
* @see {@link Sumi.Math}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math}
* @see {@link https://msdn.microsoft.com/en-us/library/ie/b272f386(v=vs.94).aspx}
*/
	