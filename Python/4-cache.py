def fn():
    print('Generate cache')
    cache = {}
    def get_from_cache(key):
        res = cache.get(key)
        if res:
            print('From cache')
            return res
        else:
            print('Calculate and save')
            res = 'value ' + str(key)
            cache[key] = res
    return get_from_cache

f1 = fn()
f2 = fn()

f1(1)
f1(2)
f1(1)
f1(2)

f2(1)
f2(2)
f2(1)
f2(2)