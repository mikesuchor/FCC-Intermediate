/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    var i = 0;
    var firstConsonant = "";

    // Split the word into an array
    str = str.split('');
    
    // If the word begins with a vowel, add "way" to the end
    if(str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u") {
        str.push("way");
    }
    // Otherwise if the word begins with a consonant, move it to the end and add "ay"
    else {
        while(str[i] !== "a" || str[i] !== "e" || str[i] !== "i" || str[i] !== "o" || str[i] !== "u") {
            firstConsonant += str[0];
            str.shift(i);
            i++;
        }
        str.push(firstConsonant, "ay");
    }
    // Rejoin the array into a word
    return(str.join(''));
}

console.log(translatePigLatin("consonant"));