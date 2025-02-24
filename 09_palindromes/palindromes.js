const palindromes = function (str) {
  const alfanumerico = "abcdefghijklmnopqrstuvwxyz0123456789";

  const stringLimpio = str
    .toLowerCase()
    .split('')
    .filter(item => alfanumerico.includes(item))
    .join('');

  const stringReverso = stringLimpio.split('').reverse().join('');

  return stringLimpio === stringReverso;
};

// Do not edit below this line
module.exports = palindromes;
