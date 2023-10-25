/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.split("");
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(!((s[left].charCodeAt(0) >= 97 && s[left].charCodeAt(0) <= 122) || (s[left].charCodeAt(0) >= 48 && s[left].charCodeAt(0) <= 57))) {
            left++;
            continue;
        } 
        if(!((s[right].charCodeAt(0) >= 97 && s[right].charCodeAt(0) <= 122) || (s[right].charCodeAt(0) >= 48 && s[right].charCodeAt(0) <= 57))) {
            right--;
            continue;
        } 
        if(s[right] != s[left]) {
            return false;
        }

        right--;
        left++;
    }

    return true;
};