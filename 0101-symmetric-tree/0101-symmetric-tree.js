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
var isSymmetric = function(root) {
    
    let mirror = function(p, q) {
        if(!p && !q) {
            return true;
        } else if((!p || !q) || (p.val != q.val)) {
            return false;
        }
        return (mirror(p.left, q.right) && mirror(p.right, q.left))
    }

    return mirror(root.left, root.right);
};