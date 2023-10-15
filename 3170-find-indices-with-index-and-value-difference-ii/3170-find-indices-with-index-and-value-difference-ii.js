/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    let max = 0;
    let min = 0;
    for(let i = indexDifference; i < nums.length; i++) {
        if(nums[i - indexDifference] < nums[min]) {
            min = i - indexDifference;
        } else if(nums[i - indexDifference] > nums[max]) {
            max = i - indexDifference;
        } 
        
        if(nums[i] - nums[max] >= valueDifference || nums[max] - nums[i] >= valueDifference) {
            return [i, max];
        }
        if(nums[i] - nums[min] >= valueDifference || nums[min] - nums[i] >= valueDifference) {
            return [i, min];
        }
    }
    
    return [-1, -1];
};