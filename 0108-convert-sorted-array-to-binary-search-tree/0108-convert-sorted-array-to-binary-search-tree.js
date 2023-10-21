/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let recursive = function(arr, start, end) {
        let mid = Math.floor((start + end) / 2);

        let root = new TreeNode(arr[mid]);
        if(mid != end) {
            root.right = recursive(nums, mid + 1, end);
        }
        if(mid != start) {
            root.left = recursive(nums, start, mid - 1);
        }
        return root;
    }

    return recursive(nums, 0, nums.length - 1);
};