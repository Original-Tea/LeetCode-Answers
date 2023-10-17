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
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    let queue = [root];
    let depth = 0;
    while(queue.length) {
        depth++;
        let len = queue.length;

        for(let i = 0; i < len; i++) {
            if(queue[i].right) {
                queue.push(queue[i].right);
            }
            if(queue[i].left) {
                queue.push(queue[i].left);
            }
        }

        queue.splice(0, len);
    }

    return depth;
};