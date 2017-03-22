# ʕ·ᴥ·ʔ says: "Hey there!"

## functions
- [filter](#filter)
- [map](#map)
- [filter](#reduce)

### filter
> Ƹ̵̡Ӝ̵̨̄Ʒ 

Filter an array.

```js
import ʕ·ᴥ·ʔ from 'bearray';

const ᕕ·ᐛ·ᕗ = ʕ·ᴥ·ʔ([1, 2, 3, 4]).Ƹ̵̡Ӝ̵̨̄Ʒ((value, index) => {
  return value % 2 === 0;
});

ᕕ·ᐛ·ᕗ.output // [2, 4]
```

### map
> ʕʘ̅͜ʘ̅ʔ

Map over an array.

```js
import ʕ·ᴥ·ʔ from 'bearray';

const ᕕ·ᐛ·ᕗ = ʕ·ᴥ·ʔ([1, 2, 3, 4]).ʕʘ̅͜ʘ̅ʔ((value, index) => {
  return value + value;
});

ᕕ·ᐛ·ᕗ.output // [2, 4, 6, 8]
```

### reduce
> ಠ_ಠ

Reduce an array.

```js
import ʕ·ᴥ·ʔ from 'bearray';

const ᕕ·ᐛ·ᕗ = ʕ·ᴥ·ʔ([1, 2, 3, 4]).ಠ_ಠ((sum, current) => {
  return sum + current;
});


ᕕ·ᐛ·ᕗ.output // [10]
```