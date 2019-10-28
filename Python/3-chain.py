def fn(a):
    def _(b):
        def _(c):
            return a + b + c
        return _
    return _

f1 = fn(1)
f2 = f1(2)
res1 = f2(3)
res2 = fn(1)(2)(3)

if (res1 == res2):
    print('a + b + c =', res1)
