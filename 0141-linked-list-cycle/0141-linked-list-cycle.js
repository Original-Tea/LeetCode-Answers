/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {
        return false;
    }

    let one = head;
    let two = head;

    while(one && two) {
        if(!two.next || !two.next.next) {
            return false;
        }

        one = one.next;
        two = two.next.next;

        if(one == two) {
            return true;
        }
    }
};