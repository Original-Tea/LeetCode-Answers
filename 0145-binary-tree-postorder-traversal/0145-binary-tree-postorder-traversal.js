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
var postorderTraversal = function(root) {
    let result = [];

    let recursive = function(root) {
        if(!root) {
            return;
        }

        recursive(root.left);
        recursive(root.right);
        result.push(root.val);
    }

    recursive(root);
    return result;
};