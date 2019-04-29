function fibb(n) {
  let resultArray = [];
  if (isNaN(n)) {
    throw "Parameter is not a number";
  }
  else if (n < 0) {
    throw "Parameter should be greater or equal 0";
  }
  else if (!Number.isInteger(n)) {
    throw "Parameter is not an integer";
  }
  else if (n >= 0) {
    let a = 0;
    let b = 1;
    let c;
    for (i = 0; i < n; i++) {
      if (i === 0) 
        resultArray.push(0);
      else if (i === 1)
        resultArray.push(1);
      else {
        c = a + b;
        a = b;
        b = c;
        resultArray.push(c);
      }
    }
  }
  return resultArray;
}

module.exports = fibb;