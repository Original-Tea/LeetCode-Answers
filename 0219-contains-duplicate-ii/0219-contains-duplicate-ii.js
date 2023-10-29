/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hashmap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(i - hashmap.get(nums[i]) <= k) {
            return true;
        }

        hashmap.set(nums[i], i);
    }

    return false;
};