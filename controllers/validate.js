function validate(creditcard = "") {
  const cc = Array.from(creditcard);
  const ccr = cc.reverse();
  let even = [];
  let odd = [];
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < ccr.length; i++) {
    if (i % 2 === 0) {
      even.push(creditcard[i]);
    } else {
      odd.push(creditcard[i]);
    }
  }
  const doubledEven = even.map(el => el * 2);
  doubledEven.forEach(el => {
    if (el > 9) {
      evenSum += sumOfDigits(el);
    } else {
      evenSum += el;
    }
  });

  for (let i = 0; i < odd.length; i++) {
    oddSum += parseInt(odd[i]);
  }
  return (evenSum + oddSum) % 10 === 0;
}

function sumOfDigits(n) {
  return ((n - 1) % 9) + 1;
}

module.exports = validate;
