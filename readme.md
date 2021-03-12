# ziii

**Chain function calls using a prototype function `.z()`**

Very similar to [zii](https://github.com/staltz/zii) but without polluting the Object prototype globally. This one allows you opt-in when should the `z` utility be applied on the target object, allowing you to right-compose functions together. This is like the [proposed pipeline operator `|>`](https://github.com/tc39/proposal-pipeline-operator), but implemented in ES5.

**`z(value).z(first).z(second)` is the same as `second(first(value))`**

- 250 bytes small
- Works with functions, objects and arrays
- Works with RxJS 6+
- Works with Callbags
- Does **not work** with numbers and strings, unlike [zii](https://github.com/staltz/zii)
- Supports TypeScript

## Installation

```sh
npm install ziii
```

## Usage

```js
const z = require('ziii')

const result = z({age: 10})        // Call z() to wrap the input
  .z(({age}) => ({age: age * 3}))  // then .z() to continue the chain
  .z(({age}) => ({age: age / 4}))
  .z(({age}) => ({age: Math.ceil(age)}));

console.log(result) // {age: 8}
```

If you use TypeScript, then add this to your `tsconfig.json` file:

```
{
  ...
  "types": [
    "node_modules/ziii/index.d.ts"
  ]
  ...
}
```

## Examples

### RxJS

```js
const z = require('ziii')
const {from} = require('rxjs')
const {map, filter} = require('rxjs/operators')

z(from([1, 2, 3, 4, 5]))
  .z(filter(x => x % 2 === 1))
  .z(map(x => x * 10))
  .subscribe({
    next: x => console.log(x)
  })
```

### Callbags

```js
const z = require('ziii')
const {fromIter, map, filter, forEach} = require('callbag-basics')

z(fromIter([1, 2, 3, 4, 5]))
  .z(filter(x => x % 2 === 1))
  .z(map(x => x * 10))
  .z(forEach(console.log))
```

## License

[MIT](LICENSE)