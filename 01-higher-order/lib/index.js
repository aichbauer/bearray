const ʕ·ᴥ·ʔ = function (input) {
  const checkArray = function (i) {
    if (!this.output) this.output = i;
  };

  const map = function (cb) {
    checkArray.call(this, input);
    const result = [];
    this.output.forEach((value, index) => {
      result.push(cb(value, index));
    });
    this.output = result;
    return this;
  };

  const filter = function (cb) {
    checkArray.call(this, input);
    const result = [];
    this.output.forEach((value, index) => {
      if (cb(value, index)) result.push(value);
    });
    this.output = result;
    return this;
  };

  const reduce = function (cb) {
    checkArray.call(this, input);
    let old;
    this.output.forEach((value, index) => {
      if (index === 0) {
        old = value;
        return;
      }
      old = cb(old, value);
    });
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
