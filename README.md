# fib
Vanity one liners. 
- Fibonacci in position number
- __String__ sequence of fib nums up to a certain number
- __Sum__ of fib up to a certain number

## Javascript one liners
```javascript
// fib in postion
const fib = (pos, a=0, b=1) => pos ? fib(pos-1, b, a+b) : a

// String of fibs less or equal to num
const fibs = (num, a=0, b=1) => num >= b ? `${a}, ` + fibs(num, b, a+b) : a

// Sum of fibs less or equal to num
const fibSum = (num, a=0, b=1) => num >= b ? a + fibSum(num, b, a+b) : a
```

## Python two liners
```python
# fib in postion
def fib(pos, a=0, b=1):
  return fib(pos-1, b, a+b) if pos else a
  
# String of fibs less or equal to num
def fibs(num, a=0, b=1):
  return f"{a} " + str(fibs(num, b, a+b)) if num >= b else a

# Sum of fibs less or equal to num
def fib_sum(num, a=0, b=1):
  return a + fib_sum(num, b, a+b) if num >= b else a
```
