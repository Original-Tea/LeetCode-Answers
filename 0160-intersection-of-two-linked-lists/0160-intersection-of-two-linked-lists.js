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
            a = headA;
        } else {
            a = a.next;
        }
        if(!b) {
            b = headB;
        } else {
            b = b.next;
        }
    }

    return a;
};