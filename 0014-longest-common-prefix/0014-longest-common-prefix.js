/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ""
    let sorted = strs.sort((a, b) => a.length - b.length);
    let count = 0;

    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] == "") {
            return result
        }

        if(sorted[0][count] != sorted[i][count]) {
            return result;
        } else if(i == sorted.length - 1) {
            result += sorted[0][count];
            count++;
            i = 0;
            if(count == sorted[0].length) {
                return result
            }
        }
    }

    return result;
};