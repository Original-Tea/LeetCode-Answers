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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) {
        return true;
    }

    let max = function(i) {
        if(!i) {
            return 0;
        }

        return (Math.max(max(i.left), max(i.right)) + 1);
    }

    let left = max(root.left);
    let right = max(root.right);

    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};