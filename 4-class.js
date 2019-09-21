// class calculator {
//   static sum(x, y) {
//     return x + y;
//   }
//   sum2(x, y) {
//     return x + y;
//   }
// }
// const calculatorObjest = new calculator();
// console.log(calculator.sum(1, 2));
// console.log(calculatorObjest.sum2(2, 3));
// console.log(calculatorObjest.sum(2, 3));

class calculator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
CalculatorObject = new calculator();
console.log(calculator.sum(1, 2));
console.log(CalculatorObject.sum2(2, 3));
console.log(CalculatorObject.multiply(2, 3));
