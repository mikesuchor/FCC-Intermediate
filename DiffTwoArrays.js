/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];

  // Loops through the first array
  for (var i = 0; i < arr1.length; i++) {
      // Loops through the second array
      for (var j = 0; j < arr2.length; j++) {
          // If the current value in the first array is equal to the current value in the second array delete both valuesS
          if (arr1[i] === arr2[j]) {
              delete arr1[i];
              delete arr2[j];
          }
      }
  }
  newArr = newArr.concat(arr1, arr2);
  return newArr.filter(Boolean);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));