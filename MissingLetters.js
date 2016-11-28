/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

    for (var i = 0; i < str.length; i++) {
        if(str.charCodeAt(i+1) - str.charCodeAt(i) != 1) {
            console.log(str.charCodeAt(i));
        }
        else {
            console.log(str.charCodeAt(i));
        }
    }
    return str;
}

fearNotLetter("abce");