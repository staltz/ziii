const test = require('tape');
const z = require('../index');

test('it works with plain objects', (t) => {
  t.plan(1);
  const result = z({age: 10})
    .z(({age}) => ({age: age * 3}))
    .z(({age}) => ({age: age / 4}))
    .z(({age}) => ({age: Math.ceil(age)}));
  t.deepEquals(result, {age: 8});
});

test('it cannot be used to output an object with a field "z"', (t) => {
  t.plan(1);
  const times3 = ([x]) => [x * 3];
  const calculateCoords = ([i]) => ({x: i, y: i, z: i});

  const final = z([3]).z(times3).z(calculateCoords);
  t.equals(typeof final.z, 'function');
});

test('it cannot be used on an input object with field "z"', (t) => {
  t.plan(1);
  const final = z({x: 3, y: 3, z: 3});
  t.equals(typeof final.z, 'function');
});
