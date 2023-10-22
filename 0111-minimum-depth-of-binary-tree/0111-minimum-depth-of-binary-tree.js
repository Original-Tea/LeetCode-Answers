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
 * @return {number}
 */
var minDepth = function(root) {
    let min = 0;
    let depth = 1;

    if(!root) {
        return min;
    }

    let smol = function(l, r, depth) {
        if(!l && !r) {
            if(min == 0 || depth < min) {
                min = depth;
            }
            return min;
        }
        if(!l) {
            return smol(r.left, r.right, depth + 1);
        }
        if(!r) {
            return smol(l.left, l.right, depth + 1);
        }
        return smol(l.left, l.right, depth + 1) && smol(r.left, r.right, depth + 1);
    }

    return smol(root.left, root.right, depth);
};