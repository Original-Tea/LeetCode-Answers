/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let answer = new ListNode();
    let result = answer;

    let i = list1;
    let j = list2;

    if(i == null) {
        return j;
    } else if(j == null) {
        return i;
    }

    while(i != null && j != null) {
        if(i.val >= j.val) {
            answer.next = new ListNode(j.val);
            answer = answer.next
            j = j.next;
        } else if(i.val < j.val) {
            answer.next = new ListNode(i.val);
            answer = answer.next;
            i = i.next;
        }
    }
    while(i != null) {
        answer.next = new ListNode(i.val);
        answer = answer.next;
        i = i.next;
    }
    while(j != null) {
        answer.next = new ListNode(j.val);
        answer = answer.next;
        j = j.next;
    }

    return result.next
}