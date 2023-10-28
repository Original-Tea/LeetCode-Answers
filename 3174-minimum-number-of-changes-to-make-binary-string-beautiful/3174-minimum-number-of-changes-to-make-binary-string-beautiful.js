/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let current = null;
    let stacklen = 0;
    let changes = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(current != s[i]) {
            if(stacklen % 2 == 1) {
                s[i] = current;
                stacklen = 0;
                changes++;
            } else {
                current = s[i];
                stacklen++;
            }
        } else {
            stacklen++;
        }
    }
    
    return changes;
};