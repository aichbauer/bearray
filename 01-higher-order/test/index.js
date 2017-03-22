import test from 'ava';

import ʕ·ᴥ·ʔ from '../lib';

const notValidArr = 'not a valid array';
const arr = [1, 2, 3, 4];

test('fails on non array in map', (t) => {
  t.plan(1);

  try {
    ʕ·ᴥ·ʔ(notValidArr).ʕʘ̅͜ʘ̅ʔ(value => value);
  } catch (e) {
    t.is(e.message, 'ʕ·ᴥ·ʔ is grumpy and says: "Your input should be a valid array!"');
  }
});

test('fails on non array in filter', (t) => {
  t.plan(1);

  try {
    ʕ·ᴥ·ʔ(notValidArr).Ƹ̵̡Ӝ̵̨̄Ʒ(() => true);
  } catch (e) {
    t.is(e.message, 'ʕ·ᴥ·ʔ is grumpy and says: "Your input should be a valid array!"');
  }
});

test('fails on non array in reduce', (t) => {
  t.plan(1);

  try {
    ʕ·ᴥ·ʔ(notValidArr).ಠ_ಠ(() => 1);
  } catch (e) {
    t.is(e.message, 'ʕ·ᴥ·ʔ is grumpy and says: "Your input should be a valid array!"');
  }
});

test('reduce an array', (t) => {
  const reduce = ʕ·ᴥ·ʔ(arr).ಠ_ಠ((prev, curr) => prev + curr);

  t.deepEqual(reduce.output, [10]);
});

test('filter all odds of an array', (t) => {
  const filter = ʕ·ᴥ·ʔ(arr).Ƹ̵̡Ӝ̵̨̄Ʒ(value => value % 2 === 0);

  t.deepEqual(filter.output, [2, 4]);
});

test('multiply all elements by 2', (t) => {
  const map = ʕ·ᴥ·ʔ(arr).ʕʘ̅͜ʘ̅ʔ(value => value * value);

  t.deepEqual(map.output, [1, 4, 9, 16]);
});

test('chain some methods', (t) => {
  const map = ʕ·ᴥ·ʔ(arr).ʕʘ̅͜ʘ̅ʔ(value => value + 1)
    .Ƹ̵̡Ӝ̵̨̄Ʒ(value => value % 2 === 0)
    .ಠ_ಠ((prev, curr) => prev + curr);

  t.deepEqual(map.output, [6]);
});

test('🥚', (t) => {
  const secret = [0.1, 0.2, 0.3, 0.4, 16674145, 16674145, 33348291];
  const reduce = ʕ·ᴥ·ʔ(secret).ಠ_ಠ((prev, curr) => prev + curr);

  t.is(reduce.message, 'ʕ·ᴥ·ʔ  says: Yes you found me! Think in decimal!');
});
