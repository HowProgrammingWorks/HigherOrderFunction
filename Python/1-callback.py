def fn(par, callback):
    if not par:
        callback(Exception("Parametr needed"))
        return
    callback(None, f'Data: {par}')
    return 'Value'

def callback(err, data=None):
    if err:
        raise err
    print(data)

res = fn('example', callback)
fn(None, callback)
print(res)


