/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

    var temp;
    
    // Loop through the string and store the character code in a temporary variable 
    for (var i = 0; i < str.length; i++) {
        temp = str.charCodeAt(i);
    
        // If the end of the string is reached return undefined
        if (str.length-1 === i) {
           return undefined;
        }
    
        // If the following character code is not 1 higher than the current character code, return the missing letter
        if ((str.charCodeAt(i+1) - temp !== 1)) {
            return String.fromCharCode(temp+1);
        }
    }
}

console.log(fearNotLetter("abdef"));