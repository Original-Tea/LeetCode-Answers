/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashmap = {};

    for(let i = 0; i < nums.length; i++) {
        if(!hashmap[nums[i]]) {
            hashmap[nums[i]] = 1;
        } else {
            hashmap[nums[i]] = 2;
        }
    }

    for(i in hashmap) {
        if(hashmap[i] == 1) {
            return i;
        }
    }
};