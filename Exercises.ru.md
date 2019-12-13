## Функции высшего порядка

1. Реализуйте функцию `iterate(object, callback)` которая будет итерировать
все ключи переданного объекта, вызывая для каждого `callback` со следующим
контрактом `callback(key, value, object)`. Например:

```js
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});
```
Вывод:
```
{ key: 'a', value: 1 }
{ key: 'b', value: 2 }
{ key: 'c', value: 3 }
```

2. Реализуйте функцию `store(value)` которая сохранит значение в замыкании
возвращаемой функции, а после ее вызова вернет значение из замыкания, как
в примере:

```js
const read = store(5);
const value = read();
console.log(value); // Output: 5
```
