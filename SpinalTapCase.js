/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {

    // If regexp finds a lower case letter (capture group 1 [a-z]) followed by an upper case letter (capture group 2 [A-Z])
    // then insert a space between them
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Using regexp, replace all underscores and spaces with -
    str = str.replace(/[_|\s+]/g, "-");

    // Lowercase the string
    return str.toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));