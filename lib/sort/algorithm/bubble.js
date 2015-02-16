
define({
	name : 'bubble',
	func : function (c, l, p) {
		while  (l) {
			for(var e = 0, i = 1; i < l; i++) {
				var a = c[i - 1],
					b = c[i];
				if (p(a , b)) {
					c[i - 1] = b;
					c[i] = a;
					e = i;
				}
			}
			l = e;
		}
		return  c;
	}
});

/*
procedure bubble( A : list of sortable items )
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
