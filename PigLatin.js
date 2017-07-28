/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  
  // Empty string to hold the beginning consonants
  var firstLetters = [];

  // Regular expressions for all vowels and all consonants
  var vowels = /[aeiou]/gi;
  var consonants = /[^aeiou]/gi;
  
  str = str.split('');

  /* If the first letter is a vowel, join the letters in the array, add the beginning consonants and 'way' to the end
  to get the Pig Latin word. */
  if (str[0].match(vowels)) {
    return (str.join('') + firstLetters + 'way');
  }
  
  /* Else if the first latter is a consonant, check if the first letter is a consonant and if it is, slice the first letter
  off and add it to the firstLetters array. When the first letter is a vowel, join the letters in the array, add the
  beginning consonants and 'ay' to the end to get the Pig Latin word. */ 
  else {
    for (var i = 0; i < str.length; i++) {
      while(str[i].match(consonants)) {
        firstLetters += str.slice(0,1);
        str = str.slice(1, str.length);
      }
      return (str.join('') + firstLetters + 'ay');
    }
  }
}

console.log(translatePigLatin("consonant"));