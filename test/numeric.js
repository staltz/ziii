const test = require('tape');
const z = require('../index');

test('it throws an error when input is a number', t => {
  t.plan(1);
  const times3 = x => x * 3;

  t.throws(() =>{
    const pre = z(3).z(times3);
    t.equal(pre, void 0);
  }, 'non-object');
});