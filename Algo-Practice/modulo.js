function Modulo(num1, num2) {
  while (num2 <= num1) {
    num1 = num1 - num2;
  }
  return (num1);
}

console.log(Modulo(100,10));

// out remainder
// 0 modulus any number will = 0 otherwise any number = NAN