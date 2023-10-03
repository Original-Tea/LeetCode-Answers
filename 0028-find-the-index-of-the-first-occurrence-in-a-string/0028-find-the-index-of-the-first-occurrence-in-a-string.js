/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let needed = needle.length;
    let count = 0;

    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle[count]) {
            if(count == needed - 1) {
                return i - count;
            }
            count++;
        }
        else {
            if(count > 0) {
                i = i - count;
            }
            count = 0;
        }
    }
    return -1;
};