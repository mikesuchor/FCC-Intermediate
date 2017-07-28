/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  
  // Split the string into an array
  str = str.split('');
  
  // Create a new array to hold the pairs
  var paired = [];
  
  // Loop through the str array, creating base pairs (AT/GC) and then pushing the pairs to the paired array
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  }
  return paired;
}

console.log(pairElement("GCTAC"));