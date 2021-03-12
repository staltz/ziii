const test = require('tape');
const z = require('../index');

test('it throws an error when input is a string', (t) => {
  t.plan(1);
  function doubleSay(str) {
    return str + ', ' + str;
  }

  t.throws(() => {
    const final = z('hello').z(doubleSay);
  }, 'non-object');
});
