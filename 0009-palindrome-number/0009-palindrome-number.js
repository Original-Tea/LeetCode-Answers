/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = String(x).split("")
    for(let i = 0; i < arr.length/2; i++) {
        if(arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};