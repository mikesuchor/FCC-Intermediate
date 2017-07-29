/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {

  var temp = 0;
  var prevNumber = 0;
  var number = 1;
  var sum = 0;
  
  // While the current number is less than the number passed in
  while (number <= num) {
    
    // If the number is an odd number, add it to the sum
    if (number % 2 !== 0) {
      sum += number;
    }
    
    /* Store the current number in a temporary variable, add the previous number to the current number, 
    and set the previous number to the number stored in the temporary variable (old current number) */
    temp = number;
    number += prevNumber;
    prevNumber = temp;
  }
  return sum;
}

console.log(sumFibs(4));