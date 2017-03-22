const ʕ·ᴥ·ʔ = function (input) {
  const checkArray = function (i) {
    if (Object.prototype.toString.call(input) !== '[object Array]') {
      throw new Error('ʕ·ᴥ·ʔ is grumpy and says: "Your input should be a valid array!"');
    }

    if (!this.output) {
      this.output = i;
    }
  };

  const map = function (cb) {
    const result = [];

    checkArray.call(this, input);

    this.output.forEach((value, index) => {
      result.push(cb(value, index));
    });

    this.output = result;

    return this;
  };

  const filter = function (cb) {
    const result = [];

    checkArray.call(this, input);

    this.output.forEach((value, index) => (cb(value, index) ? result.push(value) : undefined));
    this.output = result;

    return this;
  };

  const reduce = function (cb) {
    let old;

    checkArray.call(this, input);

    this.output.forEach((value, index) => {
      if (index === 0) {
        old = value;

        return;
      }

      old = cb(old, value);
    });

    if (old === 66696582) {
      this.message = 'ʕ·ᴥ·ʔ  says: Yes you found me! Think in decimal!';
    }

    this.output = [old];

    return this;
  };

  return {
    map,
    filter,
    reduce,
  };
};

export default ʕ·ᴥ·ʔ;
