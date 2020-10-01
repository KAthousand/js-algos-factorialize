//FACTORIALIZE

const factorialize = (n) => {
  if (n < 0) {
    return n;
  } else if (n === 0) {
    return 1;
  }
  return n * factorialize(n - 1);
};

console.log(factorialize(4));

module.exports = {
  factorialize,
};
