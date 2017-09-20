/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  
  // Arrays to store the final array, the source keys, and the source values
  var finalarr = [];
  var sourcekeys = Object.keys(source);
  var sourcevalues = Object.values(source);
  
  // Loops through the collection and checks if each key's value matches, then if it's the last item of the array, push the collection element to the final array
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < sourcekeys.length; j++) {
      if (collection[i][sourcekeys[j]] == sourcevalues[j]) {
        if (j+1 == sourcekeys.length) {
          finalarr.push(collection[i]);
        }
      }
    }
  }
  return finalarr;
}
  
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));  