const calculator = {
  add: function (...numbers) {
    return numbers.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
  },
  subtract: function (...numbers) {
    return numbers.reduce((accumulator, current) => {
      return accumulator - current;
    });
  },
  multiply: function (...numbers) {
    return numbers.reduce((accumulator, current) => {
      return accumulator * current;
    }, 1);
  },
  divide: function (...numbers) {
    return numbers.reduce((accumulator, current) => {
      return accumulator / current;
    });
  },
};

module.exports = calculator;
