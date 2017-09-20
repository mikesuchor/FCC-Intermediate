/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  
  var sortedarr = [];
  var finalarr = [];
  
  // Pushes the arguments to an array
  for (var i = 0; i < arguments.length; i++) {
    sortedarr.push(arguments[i]);
  }
  
  // Reduces the arguments array to a single sorted array
  sortedarr = sortedarr.reduce(function(a, b) {
    return a.concat(b);
  });
  
  // Loop through the sorted array, stores the current number in index variable then if that number doesn't exist in the final array, push it to the final array
  for (var j = 0; j < sortedarr.length; j++) {
    var index = sortedarr[j];
    if (finalarr.indexOf(index) < 0) {
      finalarr.push(index);
    }
  }
  return finalarr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));