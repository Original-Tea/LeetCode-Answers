/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let pointer = head;
    let result = null;
    let resultPointer = result;

    while(pointer != null) {
        if(pointer.val == val) {
            pointer = pointer.next;
        } else {
            let node = new ListNode(pointer.val);
            if(result == null) {
                result = node;
                resultPointer = result;
                pointer = pointer.next;
            } else {
                resultPointer.next = node;
                resultPointer = resultPointer.next;
                pointer = pointer.next;
            }
        }
    }

    return result;
};