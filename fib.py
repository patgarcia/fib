def fib(pos, a=0, b=1):
  return fib(pos-1, b, a+b) if pos else a
