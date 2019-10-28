def decorator_loggable(fn):
    def wraps(*args):
        res = fn(*args)
        print(f'Call {fn.__name__}({str(args)}) Result: {res}')
        return res
    return wraps

sum = lambda a, b: a + b

loggable_sum = decorator_loggable(sum)
res = loggable_sum(3, 5)

@decorator_loggable
def sum1(a, b, c):
    print('Sum called')
    return a + b + c

sum1(2, 4, -6)