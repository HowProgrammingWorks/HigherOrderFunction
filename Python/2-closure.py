def higher_order_fn(a):
    b = 'Clousure Variable'
    def fn(c):
        print(f'{a}, {b}, {c}')
    return fn

f1 = higher_order_fn('Parametr 1')
f1('Parametr 2')

f2 = higher_order_fn('Parametr X')
f2('Parametr Y')