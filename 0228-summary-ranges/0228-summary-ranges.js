/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let starter = "off";
    let finisher = "off";
    let result = [];

    if(nums.length == 0) {
        return result;
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(i == 0  || starter == "off") {
            starter = nums[i];
        } else if(nums[i] == nums[i - 1] + 1) {
            finisher = nums[i];
        } else if(finisher == "off") {
            result.push(`${starter}`);
            starter = nums[i];
        } else {
            result.push(`${starter}->${finisher}`);
            starter = nums[i];
            finisher = "off";
        }
    }

    if(finisher == "off") {
        result.push(`${starter}`);
    } else {
        result.push(`${starter}->${finisher}`);
    }

    return result;
};