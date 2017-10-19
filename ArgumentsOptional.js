function addTogether() {

  // Function to check if the argument is a number, if it's not a number, return false
  function checkNumber(arg) {
    if (typeof arg === "number") {
      return arg;
    }
    else {
      return false;
    }
  }
  
  // If 2 arguments are passed, check both numbers and if either is false return undefined, otherwise return the sum
  if (arguments.length === 2) {
    if (!checkNumber(arguments[0]) || !checkNumber(arguments[1])) {
      return undefined;
    }
    else {
      return (arguments[0] + arguments[1]);
    }
  }
  
  // If 1 argument is passed, if it's not a number then return undefined
  else {
    if (!checkNumber(arguments[0])) {
      return undefined;
    }
    
    // If the argument is a number, store it in a variable then return a function to repeat the process
    else {
      var num1 = arguments[0];
      return function(num2) {
        if (!checkNumber(num2)) {
          return undefined;
        }
        else {
          return num1 + num2;
        }
      };
    }
  }
  
  return false;
}

console.log(addTogether(2)(3));
