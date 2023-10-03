/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {}
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(hashMap.hasOwnProperty(diff)) {
            return [i, hashMap[diff]]
        } else {
            hashMap[nums[i]] = i;
        }
    }
};