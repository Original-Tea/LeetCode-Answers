/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function(words) {
    let nums = [];
    let combo = 0;
    let result = [];
    
    for(let i = 0; i < words.length; i++) {
        if(words[i] !== "prev") {
            combo = 0;
            nums.push(words[i])
        } else {
            combo++;
            if(combo > nums.length) {
                result.push(-1);
            } else {
                result.push(nums[nums.length - combo])
            }
        }
    }
    
    return result;
};