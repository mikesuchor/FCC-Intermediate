/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. 

   & = &amp;
   < = &lt;
   > = &gt;
   " = &quot;
   ' = &apos;
*/

function convertHTML(str) {    

  // Replace all of the above elements with their corresponsing HTML entities  
  return str.replace(/&/gi, '&amp;').replace(/</gi, '&lt;').replace(/>/gi, '&gt;').replace(/"/gi, '&quot;').replace(/'/gi, '&apos;');
}

console.log(convertHTML('Stuff in "quotation marks"'));