/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB; 

    while(a != b) {
        if(!a) {
            a = headB;
        } else {
            a = a.next;
        }
        if(!b) {
            b = headA;
        } else {
            b = b.next;
        }
    }

    return a;
};