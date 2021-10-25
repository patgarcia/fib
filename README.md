# fib
Vanity one liner, fibonacci in position number.

## Javascript one liner
```javascript
const fib = (pos, a=0, b=1) => pos ? fib(pos-1, b, a+b) : a
```


## Python two liner
```python
def fib(pos, a=0, b=1):
  return fib(pos-1, b, a+b) if pos else a
```
