/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let result = null;
    let pointer = result;

    if(!head) {
        return null;
    }

    let recursive = function(head) {
        if(!head.next) {
            result = new ListNode(head.val);
            pointer = result;
            return result;
        }

        recursive(head.next);
        pointer.next = new ListNode(head.val);
        pointer = pointer.next;
        return result;
    }

    return recursive(head)
};