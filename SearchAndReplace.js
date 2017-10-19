/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
   
    // Splits the string into an array of words
    str = str.split(' ');

    // Loops through the array
    for (var i = 0; i < str.length; i++) {
        // Ignoring case, if the word in the array matches the first argument
        if (str[i].toUpperCase() === before.toUpperCase()) {
            // And if the first letter of the first argument is lowercase
            if (before[0] === before[0].toLowerCase()) {
                // Replace the word in the array with the second argument with the first letter being lowercase
                str[i] = after.charAt(0).toLowerCase() + after.slice(1);
            }
            // Otherwise replace the word in the array with the second argument with the first letter being uppercase
            else {
                str[i] = after.charAt(0).toUpperCase() + after.slice(1);
            }
        }
    }
    return str.join(' ');
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
