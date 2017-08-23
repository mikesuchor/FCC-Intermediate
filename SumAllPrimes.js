/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  
  var primes = [];
  
  if (num <= 1) {
    return "Not a prime number.";
  }
  
  function isItPrime(num) {
    for (var divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        return;
      }
    }
    return primes.push(num);
  }
    
  for (var i = 2; i <= num; i++) {
    isItPrime(i);
  }
  
  return primes.reduce(function(a, b) {return a + b;});
}

console.log(sumPrimes(10));