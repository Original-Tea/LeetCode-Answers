/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    while(nums.length > 0) {
        let popped = nums.pop();

        if(nums.includes(popped)) {
            return true;
        }
    }

    return false;
};