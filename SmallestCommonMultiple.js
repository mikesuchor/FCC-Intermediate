/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
    
    // Sort the array from largest number to smallest number
    arr.sort().reverse();
    
    // Creates a new array initialized with the first argument element
    var filledarr = [arr[0]];
    
    // Fills the rest of the array with the numbers between the first and second argument elements in descending order
    for (var i = arr[0]; i > arr[1]; i--) {
        filledarr.push(i-1);
    }
    
    // Store the smallest possible SCM by multiplying the first 2 (largest) numbers 
    var smallestSCM = filledarr[0] * filledarr[1];
    var finalSCM = smallestSCM;
    
    // Loops through the array starting from the 3rd number, if it can't be evenly divided add the smallest possible SCM to the final testing SCM and repeat from the 3rd number
    for (var j = 2; j < filledarr.length; j++) {
        if (finalSCM % filledarr[j] > 0) {
            finalSCM += smallestSCM;
            j=1;
        }
    }
    
    return finalSCM;
}
    
    
console.log(smallestCommons([1, 5]));