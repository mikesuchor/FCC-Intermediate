/* Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {

    // If the typeof bool is boolean, return true, otherwise return false
    if (typeof(bool) === 'boolean') {
        return true;
    }
    return false;
}

console.log(booWho(false));