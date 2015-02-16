
define(
[
	'./algorithm',
	'../var/slice',
	'../core/cp'
]
, function (
	algorithm,
	slice,
	cp
) 
{'use strict';

function sort (c, g, p) {
	c = slice.call(Object(c));
	return this[m || 'default'](c, c.length);
}

var Sort = {
	bubble: function (c, n, p) {
		while  (n) {
			for(var e = 0, i = 1; i < n; i++) {
				var a = c[i - 1],
					b = c[i];
				if (p(a , b)) {
					c[i - 1] = b;
					c[i] = a;
					e = i;
				}
			}
			n = e;
		}
		return  c;
	}
};



console.log(bubble([1, 2, 3, 2, 1], 5));   // [ 3, 1 ]

/*
procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat
       newn = 0
       for i = 1 to n-1 inclusive do
          if A[i-1] > A[i] then
             swap(A[i-1], A[i])
             newn = i
          end if
       end for
       n = newn
    until n = 0
end procedure
*/			  



});

/**
* @class Sumi.Sort
* @see {@link Sumi.Array.reorder}
* @see {@link Sumi.Array.shuffle}
* @see {@link http://en.wikipedia.org/wiki/Sorting_algorithm}
* @param {string|string[]} [keys] - 用于 {@link Sumi.Match#parse|parse} 方法的键值数组。也可以是用英文逗号或分号或空格分隔的字符串
* @param {function} [parser] - 用于 {@link Sumi.Match#parse|parse} 方法的回调函数
*/
	