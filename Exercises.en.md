## Higher-order functions

1. Implement function `iterate(object, callback)` to iterate given object
passing each element to callback with the following contract
`callback(key, value, object)`. Example:

```js
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});
```
Output:
```
{ key: 'a', value: 1 }
{ key: 'b', value: 2 }
{ key: 'c', value: 3 }
```

2. Implement function `store(value)` to store `value` inside closure of
returning function. After calling returning function it will return a value
from closure, like in the following example:

```js
const read = store(5);
const value = read();
console.log(value); // Output: 5
```
