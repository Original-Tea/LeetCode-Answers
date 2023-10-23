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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let checkpoint = [];
    let result = [];

    while(root || checkpoint.length > 0) {
        if(!root) {
            root = checkpoint.pop();
            root = root.right;
        } else {
            result.push(root.val);
            checkpoint.push(root);
            root = root.left;
        }
    }

    return result;
};