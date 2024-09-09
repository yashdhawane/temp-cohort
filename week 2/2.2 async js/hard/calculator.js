class Calculator {
    constructor() {
      this.result = 0; // Initialize the result variable
    }
  
    add(value) {
      this.result += value; // Update the result with addition
    }
  
    subtract(value) {
      this.result -= value; // Update the result with subtraction
    }
  
    multiply(value) {
      this.result *= value; // Update the result with multiplication
    }
  
    divide(value) {
      if (value !== 0) {
        this.result /= value; // Update the result with division
      } else {
        console.log('Cannot divide by zero');
      }
    }
  
    getResult() {
      return this.result; // Return the current result
    }
  }
  
  // Example usage:
  const calc = new Calculator();
  calc.add(10);
  calc.subtract(3);
  calc.multiply(2);
  calc.divide(7);
  console.log(calc.getResult()); // Output: 7
  