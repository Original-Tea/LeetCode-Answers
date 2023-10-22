/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false;
    }

    let path = false;

    let sum = function(root, total) {
        if(!root) {
            return true;
        }

        total = total + root.val;

        if(!root.right && !root.left) {
            if(total == targetSum) {
                path = true;
            }
            return true;
        }

        console.log(total)

        return sum(root.right, total) && sum(root.left, total);
    }

    sum(root, 0)

    return path;
};