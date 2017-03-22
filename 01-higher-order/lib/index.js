const ʕ·ᴥ·ʔ = function (input) {
  const checkArray = function (i) {
    if (Object.prototype.toString.call(input) !== '[object Array]') {
      throw new Error('ʕ·ᴥ·ʔ is grumpy and says: "Your input should be a valid array!"');
    }

    if (!this.output) {
      this.output = i;
    }
  };

  const ʕʘ̅͜ʘ̅ʔ = function (cb) {
    const result = [];

    checkArray.call(this, input);

    this.output.forEach((value, index) => {
      result.push(cb(value, index));
    });

    this.output = result;

    return this;
  };

  const Ƹ̵̡Ӝ̵̨̄Ʒ = function (cb) {
    const result = [];

    checkArray.call(this, input);

    this.output.forEach((value, index) => (cb(value, index) ? result.push(value) : undefined));
    this.output = result;

    return this;
  };

  const ಠ_ಠ = function (cb) {
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
    ʕʘ̅͜ʘ̅ʔ,
    Ƹ̵̡Ӝ̵̨̄Ʒ,
    ಠ_ಠ,
  };
};

export default ʕ·ᴥ·ʔ;
