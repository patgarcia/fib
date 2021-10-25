const fib = (pos, a=0, b=1) => pos ? fib(pos-1, b, a+b) : a
