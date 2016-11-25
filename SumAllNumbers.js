/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
    
    // Uses Math.min to find the smallest of the 2 numbers and stores it as firstNumber
    var firstNumber = Math.min(arr[0], arr[1]);
    // Uses Math.max to find the largest of the 2 numbers and stores it as lastNumber
    var lastNumber = Math.max(arr[0], arr[1]);
    // Stores the sum
    var sum = 0;

    // Loops starting at the first number through the last number and adds them to the sum
    for(var i = firstNumber; i <= lastNumber; i++) {
      sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4]));