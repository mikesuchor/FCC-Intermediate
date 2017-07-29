/* Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth
test (second argument).
*/

function findElement(arr, func) {

  // Filter the array by the function's second value
  var num = arr.filter(func);

  // Returns the first match
  return num[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));