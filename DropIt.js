/* Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/

function dropElements(arr, func) {
  
  // Store the length of the array passed to the function as the length of arr.length changes after every shift in the for loop
  var startingLength = arr.length;

  // Loops through the length of the array, starting from the front, and if false then shift the element off the array
  for (var i = 0; i < startingLength; i++) {
    if (func(arr[0]) !== true) {
      arr.shift();
    }
  }
  return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));