/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(n, words, groups) {
    let result = [];
    let prev = 0;
    
    for(let i = 0; i < n; i++) {
        if(i == 0) {
            result.push(words[0])
            prev = groups[0];
            continue;
        }
        
        if(prev !== groups[i]) {
            result.push(words[i])
        }
        
        prev = groups[i];
    }
    
    return result;
};