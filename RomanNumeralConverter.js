/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

1=I, 5=V, 10=X, 50=L, 100=C, 500=D, 1000=M
*/

function convertToRoman(num) {
 
 // Two arrays for holding the Roman Numeral letter and number values
 var letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
 // Empty string to hold the Roman Numeral value
 var roman = '';
 
 /* Loop through the numbers array and compare the num value to the number in the array.
    If the num value is smaller than or equal to the number in the array, subtract that
    number from num and add the corresponding letters to the roman string */
 for (var i = 0; i < numbers.length; i++) {
   while(numbers[i] <= num) {
     roman += letters[i];
     num -= numbers[i];
   }
 }
 return roman;
}

console.log(convertToRoman(42));