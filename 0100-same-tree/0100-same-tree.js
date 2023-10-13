/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let stackp = [];
    let stackq = [];

    let posp = p;
    let posq = q;

    if(!posp) {
        if(!posq) {
            return true;
        } else {
            return false;
        }
    } else if(!posq) {
        if(!posp) {
            return true;
        } else {
            return false;
        }
    }

    while((posp || stackp.length) && (posq || stackq.length)) {
        if(posp && posq) {
            stackp.push(posp);
            stackq.push(posq);
            if(posp.val == posq.val) {
                posp = posp.left;
                posq = posq.left;
            } else {
                return false;
            }
        } else if(!posp && !posq) {
            posp = stackp.pop();
            posp = posp.right;
            posq = stackq.pop();
            posq = posq.right;
        } else {
            return false;
        }
    }

    if(posq == posp) {
        return true;
    } else {
        return false;
    }
};