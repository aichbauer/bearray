# bearray

[![Build Status](https://travis-ci.org/rudolfsonjunior/bearray.svg?branch=master)](https://travis-ci.org/rudolfsonjunior/bearray)
[![Coverage Status](https://coveralls.io/repos/github/rudolfsonjunior/bearray/badge.svg?branch=master)](https://coveralls.io/github/rudolfsonjunior/bearray?branch=master)

> ʕ·ᴥ·ʔ says: "Hey there!"

## Installation

```sh
$ npm i bearray --save
```
or
```sh
$ yarn add bearray
```


## Methods
- [filter](#filter)
- [map](#map)
- [reduce](#reduce)
- [getValue](#getValue)

### filter
> Ƹ̵̡Ӝ̵̨̄Ʒ

Filter an array.

```js
import { ʕ·ᴥ·ʔ } from 'bearray';

const ᕕ·ᐛ·ᕗ = ʕ·ᴥ·ʔ([1, 2, 3, 4]).Ƹ̵̡Ӝ̵̨̄Ʒ((value, index) => {
  return value % 2 === 0;
});

ᕕ·ᐛ·ᕗ.ʕᵔᴥᵔʔ() // [2, 4]
```

### map
> ʕʘ̅͜ʘ̅ʔ

Map over an array.

```js
import { ʕ·ᴥ·ʔ } from 'bearray';

const ᕕ·ᐛ·ᕗ = ʕ·ᴥ·ʔ([1, 2, 3, 4]).ʕʘ̅͜ʘ̅ʔ((value, index) => {
  return value + value;
});

ᕕ·ᐛ·ᕗ.ʕᵔᴥᵔʔ() // [2, 4, 6, 8]
```

### reduce
> ಠ_ಠ

Reduce an array.

```js
import { ʕ·ᴥ·ʔ } from 'bearray';

const ᕕ·ᐛ·ᕗ = ʕ·ᴥ·ʔ([1, 2, 3, 4]).ಠ_ಠ((sum, current) => {
  return sum + current;
});


ᕕ·ᐛ·ᕗ.ʕᵔᴥᵔʔ() // [10]
```

### getValue
> ʕᵔᴥᵔʔ

Get the value at the end of some chained operations (see other functions as well).

```js
import { ʕ·ᴥ·ʔ } from 'bearray';

const ᕕ·ᐛ·ᕗ = ʕ·ᴥ·ʔ([1, 2, 3, 4]);

ᕕ·ᐛ·ᕗ.ʕᵔᴥᵔʔ() // [1, 2, 3, 4]
```
