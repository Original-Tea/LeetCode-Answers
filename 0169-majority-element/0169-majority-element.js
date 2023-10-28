/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        if(count == 0) {
            candidate = nums[i];
            count++;
            continue;
        } 

        if(nums[i] == candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};