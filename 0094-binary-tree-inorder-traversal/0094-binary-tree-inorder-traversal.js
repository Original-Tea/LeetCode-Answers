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
var inorderTraversal = function(root) {
    let checkPoint = [];
    let result = [];

    let recursive = function(root) {
        if(!root && checkPoint.length == 0) {
            return result;
        } else if(!root) {
            root = checkPoint.pop();
            result.push(root.val);
            return recursive(root.right);
        } else {
            checkPoint.push(root);
            return recursive(root.left);
        }


    };

    return recursive(root);
};