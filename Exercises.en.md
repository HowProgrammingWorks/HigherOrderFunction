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

3. Implement function `contract(fn, ...types)` to wrap `fn` (first argument) and
check argument types (all arguments except first and last) and result type (last
argument). Generates `TypeError` exception if wrong types detected. As in
following example:

```js
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5
```
and
```js
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world!
```
