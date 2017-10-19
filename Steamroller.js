/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
    
    // Create empty array outside recursive function
    var finalarr = [];
    
    // Loop through arr, if the element is an array then pass it back into steamrollIt until the element is not an array and then push it to finalarr
    function steamrollIt(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                steamrollIt(arr[i]);
          }
            else {
                finalarr.push(arr[i]);
            }
        }
    }

    // Pass arr into steamrollIt function
    steamrollIt(arr);

    return finalarr;
}
    
console.log(steamrollArray([1, [2], [3, [[4]]]]));