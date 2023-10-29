/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = (nums.length / 2) * (2 + nums.length - 1);
    
    for(let i = 0; i < nums.length; i++) {
        sum -= nums[i];
    }

    return sum;
};