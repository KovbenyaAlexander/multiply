module.exports = function multiply(first, second) {
  let one = first.split('').reverse();
  let two = second.split('').reverse();

  var res = [];
  let temp = 0;
  let mult = 0;
  for (let i = 0; i < one.length; i++) {
    for (let j = 0; j < two.length; j++) {
      mult = (one[i] * two[j]);
      if (res[i + j]) {
        res[i + j] += mult;
      } else res[i + j] = mult;
    }
  }

  for (let i = 0; i < res.length; i++) {
    let rest = res[i] % 10;
    temp = Math.floor(res[i] / 10);
    res[i] = rest;
    if (res[i + 1]) {
      res[i + 1] += temp;
    } else if (temp) res[i + 1] = temp;
  }
  return res.reverse().join('');
}